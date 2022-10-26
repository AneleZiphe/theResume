var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/project', function(req, res, next) {
  res.render('project', {page:'My Poj', menuId:'project'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

module.exports = router;

