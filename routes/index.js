var express = require('express');
var name = require('../namesdict');
var count = require('../utils/count');

var router = express.Router();

var count_words = count.count_words(name);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('name', {title: 'Name', 'count_words': count_words});
});

/* GET data page. */
router.get('/data', function (req, res, next) {
    res.render('name', {title: 'Name'});
});

module.exports = router;
