const express = require('express');
const fileController = require('../controllers/fileController');
const searchController = require('../controllers/searchController');

const router = express.Router();

router.post('/upload', fileController.uploadFile);
router.get('/search', searchController.searchFile);

module.exports = router;
