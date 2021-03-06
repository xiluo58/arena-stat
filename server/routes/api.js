var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var config = require('../config').config;
var auth = jwt({
  secret: config.secret
});
var optionalAuth = jwt({
  secret: config.secret,
  credentialsRequired: false
})

var authController = require('../controllers/authentication');
var itemsController = require('../controllers/items');
var userController = require('../controllers/user');


require('../models/Country');
var Country = mongoose.model('Country');
require('../models/Category');
var Category = mongoose.model('Category');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API works');
});

// authentication
router.post('/register', authController.register);
router.post('/login', authController.login);

router.post('/userInfo', auth, userController.updateUserInfo);
router.get('/userInfo', auth, userController.getUserInfo);

// items
router.post('/addItem', itemsController.addItem);
router.post('/favItem', auth, itemsController.favItem);
router.post('/unfavItem', auth, itemsController.unfavItem);
router.get('/getItems', optionalAuth, itemsController.getItems);
router.get('/brandList', itemsController.getBrands);
router.get('/favoriteItems', auth, itemsController.getFavoriteItems);
router.get('/item', itemsController.getItemDetails);

router.get('/countryList', function(req, res){
  Country.find({})
  .select('_id name')
  .sort('name')
  .exec((err, result)=>{
    if(err) {
      res.status(501);
      return;
    }
    res.json(result);
  });
});

router.get('/categoryList', function(req, res){
  Category.find({})
  .select('_id name')
  .sort('name')
  .exec((err, result)=>{
    if(err) {
      res.status(501);
      return;
    }
    res.json(result);
  });
});
module.exports = router;
