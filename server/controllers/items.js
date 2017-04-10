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
  Item.get({}, (err, results) => {
    if(err){
      res.status(501);
      return;
    }
    if (req.user){
      let userId = req.user._id;
      Favorite.find({user: userId})
        .distinct('item')
        .exec((err, favItems) => {
          results.forEach( item => {
            for(var i = 0; i < favItems.length; i++){
              if(favItems[i].equals(item._id)){
                item.isFavorite = true;
                break;
              }
            }
            item.isFavorite = item.isFavorite || false;
          });
          res.json(results);
        });
      /* for(var i = 0; i < results.length; i++){
        let item = results[i];
        Favorite.findOne({user: userId, item: item._id}, (err, favItem) => {
          console.log(favItem);
          if(!err && favItem) {
            item.isFavorite = true;
          } else {
            item.isFavorite = false;
          }
        })
      }*/
    }else{
      res.json(results);
    }
  });
};

module.exports.favItem = function(req, res){
  let userId = req.user._id;
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
};

module.exports.unfavItem = function(req, res){
  let userId = req.user._id;
  let itemId = req.body.id;
  Favorite.remove({
    user: userId,
    item: itemId
  }, (err, result) => {
    if(err){
      res.status(500);
      return;
    }
    res.json(result);
  })
};
