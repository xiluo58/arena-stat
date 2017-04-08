var mongoose = require('mongoose');

var BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

BrandSchema.statics.add = function(name, callback) {
  var brand = new this();
  brand.name = name;
  brand.save((err) => {
    if(callback){
      callback(err, brand);
    }
  });
}

BrandSchema.statics.getIdByName = function(name, callback) {
  var self = this;
  this.findOne({name: name}, '_id', function(err, result){
    if(err){
      if(callback){
        callback(err);
      }
      return;
    }
    if(result){
      if(callback){
        callback(err, result._id);
      }
    }else{
      self.add(name, (err, brand) => {
        if(err){
          if(callback){
            callback(err);
          }
          return;
        }
        if(callback){
          callback(err, brand._id);
        }
      });
    }
  })
};

mongoose.model('Brand', BrandSchema);
