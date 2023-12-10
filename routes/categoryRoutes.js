const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');

router.get('/category', categoryController.getAllCategory);
router.get('/category/:id', categoryController.getCatById);

module.exports = {router};