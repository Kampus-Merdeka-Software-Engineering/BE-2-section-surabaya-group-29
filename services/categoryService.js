const prisma = require('../config/prisma.js')

async function getAllCategory() {
    try{
        const category = await prisma.category.findMany();

        return category;
    } catch(err) {
        throw err;
    }
};

async function getCatById(cat_id) {
    try{
        const result = await prisma.category.findMany({
            where: {
                id: cat_id,
            },
        });
        return result;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    getAllCategory,
    getCatById
}