var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/presentation', function(req, res){
    var cssFiles = require('../config/css-files.js'),
        js = require('../config/js-files.js'),
        initialJsFiles = js.initialJsFiles,
        jsFiles = js.jsFiles,
        model = {};

    model.name = 'presentation';
    model.cssFiles = cssFiles;
    model.initialJsFiles = initialJsFiles;
    model.jsFiles = jsFiles;
    model.title = "Presentation";

    res.render('presentation', model);
});

router.get('/remote', function(req, res){
    var cssFiles = require('../config/css-files.js'),
        model = {};

    model.cssFiles = cssFiles;
    res.render('remote', model);
});

module.exports = router;
