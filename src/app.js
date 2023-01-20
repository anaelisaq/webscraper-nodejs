const express = require('express');
const cors = require('cors');
const webscraperRouter = require('../src/routes/webscraper-routes');
const app = express();
require("dotenv-safe").config();

app.use(express.json());
app.use(cors());


app.use('/lenovo', webscraperRouter);


module.exports = app;