var mongoose = require('mongoose');
require('../models/Brand');
require('../models/Item');
require('../models/Favorite');
var Brand = mongoose.model('Brand');
var Item = mongoose.model('Item');
var Favorite = mongoose.model('Favorite');

module.exports.addItem = function(req, res) {
  var body = req.body;
  console.log(req);
  if(!body.brand._id){
    Brand.getIdByName(brand, (err, brandId) => {
      if(err){
        res.status(501);
        return;
      }
      body.brand = brandId;
    })
  }else{
    body.brand = body.brand._id;
  }
  Item.add(body, (err, newItem) => {
    if(err){
      res.status(501);
      return;
    }
    res.json(newItem);
  });
};

module.exports.getBrands = function(req, res){
  Brand.find({})
  .select('_id name')
  .exec((err, result) => {
    if(err){
      res.status(501);
      return;
    }
    res.json(result);
  })
}

module.exports.getItems = function(req, res){
  Item.get({}, (err, result) => {
    if(err){
      res.status(501);
      return;
    }
    res.json(result);
  });
}

module.exports.favItem = function(req, res){
  let userId = req.payload._id;
  let itemId = req.body.id;
  Favorite.add({
    user: userId,
    item: itemId
  }, (err, result) => {
    if(err){
      res.status(500);
      return;
    }
    res.json(result);
  })
}
