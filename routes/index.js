const express = require('express');
const router = express.Router();
const excelController = require('../controllers/excelController');

router.get('/', excelController.getHomePage);
router.post('/upload', excelController.uploadExcelFile);
router.post('/filter', excelController.filterData);
router.post('/sort', excelController.sortData);

module.exports = router;