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

mongoose.model('Brand', BrandSchema);
