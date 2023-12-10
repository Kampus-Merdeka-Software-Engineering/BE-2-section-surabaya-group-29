const prisma = require('../config/prisma.js')

//panggil semua category
async function getAllCategory() {
    try{
        const category = await prisma.category.findMany();

        return category;
    } catch(err) {
        throw err;
    }
};

//panggil category sesuai id
async function getCatById(cat_id) {
    try{
        const result = await prisma.category.findUnique({
            where: {
                id: parseInt(cat_id),
            },
        });
        return result;
    } catch(err) {
        throw err;
    }
}

//panggil semua news sesuai id kategori
async function getNewsByCatId (cat_id) {
    try{
        const result = await prisma.news.findMany({
            where: {
                cat_id: parseInt(cat_id),
            },
        });
        return result;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getAllCategory,
    getCatById,
    getNewsByCatId,
}