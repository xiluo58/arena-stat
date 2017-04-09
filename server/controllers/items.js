var mongoose = require('mongoose');
require('../models/Brand');
require('../models/Item');
var Brand = mongoose.model('Brand');
var Item = mongoose.model('Item');

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
