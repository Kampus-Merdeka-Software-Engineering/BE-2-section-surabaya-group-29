const newsService = require('../services/newsService.js')

async function getAllNews(req, res) {
    // const { keyword, search } = req.query;

    // const result = await prisma.news.findMany();
    const news = await newsService.getAllNews();

    res.json(news);

    // res.json({
    //     message: 'Get list all data news is successfully',
    //     data: result  
    // });
};

module.exports = {
    getAllNews
};