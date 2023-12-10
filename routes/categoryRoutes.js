const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');

router.get('/category', categoryController.getAllCategory); //panggil semua category
router.get('/category/:id', categoryController.getCatById); //panggil category sesuai id
router.get('/category/:id/news', categoryController.getCatById); //panggil semua news sesuai id cat


module.exports = {router};