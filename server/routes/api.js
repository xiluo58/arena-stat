var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'SECRET',
  userProperty: 'payload'
});

var authController = require('../controllers/authentication');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API works');
});

// authentication
router.post('/register', authController.register);
router.post('/login', authController.login);


module.exports = router;
