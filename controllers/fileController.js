const xlsx = require('xlsx');

let workbook;

exports.uploadFile = (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  let uploadFile = req.files.uploadFile;

  workbook = xlsx.read(uploadFile.data, {type: 'buffer'});

  res.send('File uploaded!');
};
