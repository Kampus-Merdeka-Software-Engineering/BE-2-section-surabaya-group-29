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

const getNewsById = async (req, res) => {
    try {
        const result = await newsService.getNewsById(req.params.id);
        if (!result) {
            res.status(404);
            res.json({
                message: 'News not found',
            });
            return;
        }

        res.json({
            data: result,
            message: "News successfully retrieved",
        });
    } catch (e) {
        res.json({
            error:e,
        });
    }
};

const searchNews = async (req, res) => {
    try {
      const result = await newsService.searchNews(req.params.title);
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
    } catch (e) {
      res.json({
        error: e,
      });
    }
  };

module.exports = {
    getAllNews,
    getNewsById,
    searchNews,
};