const categoryService = require('../services/categoryService.js')

async function getAllCategory(req, res) {
    const category = await categoryService.getAllCategory();

    res.json(category);
};

module.exports = {
    getAllCategory
};