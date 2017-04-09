var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'SECRET'
});

var authController = require('../controllers/authentication');
var itemsController = require('../controllers/items');


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

// items
router.post('/addItem', itemsController.addItem);
router.post('/favItem', auth, itemsController.favItem);
router.get('/getItems', itemsController.getItems);
router.get('/brandList', itemsController.getBrands);

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
