const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController.js');

router.get('/berita', newsController.getAllNews);

module.exports = router;
