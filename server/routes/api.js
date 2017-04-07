var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'SECRET',
  userProperty: 'payload'
});

var authController = require('../controllers/authentication');


router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API works');
});

// authentication
router.post('/register', authController.register);
router.post('/login', authController.login);


module.exports = router;
