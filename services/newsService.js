const prisma = require('../config/prisma.js')

//panggil semua news
async function getAllNews() {
    try{
        const news = await prisma.news.findMany();

        return news;
    } catch(err) {
        throw err;
    }
};

//panggil news berdasarkan id
async function getNewsById(id) {
    try{
        const news = await prisma.news.findUnique({
            where:{
                id: parseInt(id),
            },
        });
        return news;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllNews,
    getNewsById,
};