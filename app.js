const express = require('express');
const { PrismaClient } = require('@prisma/client')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(bodyParser.json())

function LoggerMiddleware(req, res, next) {
    console.log(`Request api received at: ${new Date()}`)
    next();
}



app.get('/', (req, res) => {
    res.send('Hello World')

})

app.get('/berita', async (req, res) => {
    const { keyword, search } = req.query;

    const result = await prisma.news.findMany();

    res.json({
        message: 'Get list all data news is successfully',
        data: result
        
    })
})

app.use(LoggerMiddleware);

app.get('/berita/:id', (req, res) => {
    const beritaId = req.params.id;
    res.json({
        message: `Get detail data news by id ${beritaId} is successfully`,
        data: 
            {
                id: beritaId,
                judul: 'Umi Ayu Meluncurkan Produk Baru Buatan Orang Indonesia',
                deskripsi: 'Ini adalah Deskripsi',
                isiBerita: 'Ini adalah Berita',
                penulis: 'Ammar',
                foto: 'Ini adalah link foto'
            }
    })
})

app.post('/berita', async (req, res) => {
    const { judul, deskripsi, isiBerita, penulis, foto } = req.body
    
    const result = await prisma.news.create({
        data: {
            judul,
            deskripsi,
            isiBerita,
            penulis,
            foto
        }
    })

    res.json({
        message: 'Create data news is successfully',
        data: result
    })
})

app.listen(port, () => {
    console.log(`example app listing on port http://localhost:${port}`);
})