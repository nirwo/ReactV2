const readExcelFile = require('read-excel-file/node');
const excelUtils = require('../utils/excelUtils');

exports.getHomePage = (req, res) => {
  res.render('index', { data: null });
};

exports.uploadExcelFile = (req, res) => {
  const file = req.file;
  if (file) {
    const filePath = file.path;
    readExcelFile(filePath).then((rows) => {
      // Convert rows to a more friendly data structure
      const data = excelUtils.convertRowsToData(rows);
      res.render('index', { data });
    }).catch((error) => {
      res.status(500).send(error.message);
    });
  } else {
    res.status(400).send('No file uploaded.');
  }
};

exports.filterData = (req, res) => {
  // Implement filtering logic based on request body
};

exports.sortData = (req, res) => {
  // Implement sorting logic based on request body
};