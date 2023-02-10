var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mudiaga Otojareri' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET login. */
router.get('/login', function(req, res, next) {
  res.render('Login', { title: 'login' });
});

/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET my business contacts. */
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Business Contacts'});
});


/* GET the projects i have worked on. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET the services i offer. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET my contact details. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

router.get('/update', function(req, res, next) {
  res.render('update', { title: 'Update your Information' });
});

router.get('/update', function(req, res, next) {
  res.render('update', { title: 'Your Update has been saved' });
});

module.exports = router;
