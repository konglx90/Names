var express = require('express');
var name = require('../namesdict');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var names = name.slice(0, 5);
    res.render('index', {title: 'Name', names: names});
});

module.exports = router;
