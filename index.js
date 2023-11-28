import express from "express";
import bodyParser from "body-parser";
import beritaRouter from "./routes/beritaRoutes.js";
import { startSequelize } from "./utils/startSequelize.js";
import sequelize from "./config/sequelize.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();
const port = 3001;

startSequelize();

sequelize.sync({ alter: true });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(cors());

app.use('/berita', beritaRouter);

app.use((error, request, response, next) => {
    response.status(500).json({
        message: "Internal server error!"    
    });
    console.log(error);
    next();
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})




// // import library http
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/plain'})
//         res.end('ini adalah halaman utama');
//     } else if(req.url =='/about'){
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.end('ini adalah halaman tentang kita');
//     } else{
//         res.writeHead(404, {'Content-Type': 'text/plain'})
//         res.end('halaman tidak ditemukan');
//     }
// })

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })


