var mongoose = require('mongoose');
require('../models/Brand');
require('../models/Item');
var Brand = mongoose.model('Brand');
var Item = mongoose.model('Item');

module.exports.addItem = function(req, res) {
  var body = req.body;
  var brand = body.brand;
  if(typeof brand === 'string'){
    Brand.getIdByName(brand, (err, brandId) => {
      if(err){
        res.status(501);
        return;
      }
      body.brand = brandId;
      Item.add(body, (err, newItem) => {
        if(err){
          res.status(501);
          return;
        }

        res.json(newItem);
      });
    })
  }
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
