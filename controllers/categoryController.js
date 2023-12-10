const e = require('express');
const categoryService = require('../services/categoryService.js')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

async function getAllCategory(req, res) {
    const category = await categoryService.getAllCategory();
    res.json({
        data: category,
        message: "Data successfully retrieved",
    });
};

const getCatById = async(req, res) => {
    try{
        const result = await categoryService.getCatById(req.params.id);
            if (!result) {
                res.status(404);
                res.json({
                    message: "Data not found",
                });
                return;
            }
            res.json({
                data: result,
                message: "Data successfully retrieved",
            });
    } catch(err) {
        res.json({
            error: e,
        });
    }
};

const getNewsByCatId = async (req, res) => {
    try{
        const result = await categoryService.getNewsByCatId(req.params.id);
        if (!result) {
            res.status(404);
            res.json({
                message: "Data not found",
            });
            return;
        }
        res.json({
            data: result,
            message: "Data successfully retrieved",
        });
    } catch (err) {
        res.json({
            error: e,
        });
    }
};


module.exports = {
    getAllCategory,
    getCatById,
    getNewsByCatId,
};