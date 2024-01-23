const xlsx = require('xlsx');

exports.searchFile = (req, res) => {
  if (!workbook) {
    return res.status(400).send('No file has been uploaded.');
  }

  let searchString = req.query.q;
  let results = [];

  workbook.SheetNames.forEach(sheet => {
    let data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
    data.forEach(row => {
      for (let key in row) {
        if (row[key].toString().includes(searchString)) {
          results.push(row);
        }
      }
    });
  });

  res.send(results);
};
