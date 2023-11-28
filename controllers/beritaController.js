let newsData = [
    {
        id_news: 1,
        judul: 'judul ya',
        isi_berita: 'isi berita ya',
        photo: 'nnti taro image pake [`image/logo.png` atau pake link drive]',
        id_kategori: 1,
    }
]

const getAllNews = (req,res) => {
    try{
        res.json({
            data: newsData,
            message: "Successfully retrieved news!",
        });
    } catch (error) {
        res.status(500);
        res.json({
            message: "Internal server error!",
        });
    }
};

export default {getAllNews};