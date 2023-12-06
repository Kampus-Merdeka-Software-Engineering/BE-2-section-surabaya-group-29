const prisma = require('../config/prisma.js')

async function getAllCategory() {
    try{
        const category = await prisma.category.findMany();

        return category;
    } catch(err) {
        throw err;
    }
};

module.exports = {
    getAllCategory
}