
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
const categoryRoutes = require('./routes/categoryRoutes.js');

app.use(newsRoutes);
app.use(categoryRoutes);

const PORT =process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World')

})



app.listen(PORT, () => {
    console.log(`example app listing on port http://localhost:${PORT}`);
})