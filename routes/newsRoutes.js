const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController.js');

router.get('/berita', newsController.getAllNews); // panggil semua news index
router.get('/berita/:id', newsController.getNewsById); //panggil news sesuai id setelah ditekan
router.get("/berita/search/:title", newsController.searchNews);

module.exports = router;
