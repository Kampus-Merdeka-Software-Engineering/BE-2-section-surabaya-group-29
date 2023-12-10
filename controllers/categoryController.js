const categoryService = require('../services/categoryService.js')

async function getAllCategory(req, res) {
    const category = await categoryService.getAllCategory();

    res.json(category);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

 const getCatById = async(req, res, next) => {
    try{
      const result = await getCatById(req.params.id);
  
      if(!result){
        res.status(404);
        res.json({
            message: "Data not found"
        });
        return;
      }
  
      res.json({
        data: result,
        message: "Data successfully retrieved",
      });
    } catch (e){
      next(e);
    }
   };

module.exports = {
    getCatById,
};