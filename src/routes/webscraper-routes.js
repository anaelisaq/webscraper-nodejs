const controller = require('../controller/webscraper-controller');
const express = require('express');
const router = express.Router();

router.get('/lenovo', controller);

module.exports = router;