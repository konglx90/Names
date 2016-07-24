var express = require('express');
var name = require('../namesdict');
var count = require('../utils/count');

var router = express.Router();

var count_words = count.count_words(name);
var count_family_names = JSON.stringify(count.count_the_maximum_five(name));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('name', {title: '人名', 'count_words': count_words, 'count_family_names': count_family_names});
});

/* GET data page. */
router.get('/data', function (req, res, next) {
    res.render('name', {title: 'Name'});
});

module.exports = router;
