
require('dotenv').config();
const express = require('express');

// const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// function LoggerMiddleware(req, res, next) {
//     console.log(`Request api received at: ${new Date()}`)a
//     next();
// }

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.use(LoggerMiddleware);

const newsRoutes = require('./routes/newsRoutes.js');

app.use(newsRoutes);

const PORT =process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World')

})


// app.get('/berita/:id', (req, res) => {
//     const beritaId = req.params.id;
//     res.json({
//         message: `Get detail data news by id ${beritaId} is successfully`,
//         data: 
//             {
//                 id: beritaId,
//                 judul: 'Umi Ayu Meluncurkan Produk Baru Buatan Orang Indonesia',
//                 deskripsi: 'Ini adalah Deskripsi',
//                 isiBerita: 'Ini adalah Berita',
//                 penulis: 'Ammar',
//                 foto: 'Ini adalah link foto'
//             }
//     })
// })

// app.post('/berita', async (req, res) => {
//     const { judul, deskripsi, isiBerita, penulis, foto } = req.body
    
//     const result = await prisma.news.create({
//         data: {
//             judul,
//             deskripsi,
//             isiBerita,
//             penulis,
//             foto
//         }
//     })

//     res.json({
//         message: 'Create data news is successfully',
//         data: result
//     })
// })

app.listen(PORT, () => {
    console.log(`example app listing on port http://localhost:${PORT}`);
})