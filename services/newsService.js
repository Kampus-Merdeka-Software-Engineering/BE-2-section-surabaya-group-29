const prisma = require('../config/prisma.js')

async function getAllNews() {
    try{
        const news = await prisma.news.findMany();

        return news;
    } catch(err) {
        throw err;
    }
};

module.exports = {
    getAllNews
}