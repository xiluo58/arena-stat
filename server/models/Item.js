var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./Brand');
require('./Country');
require('./Category');

var ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: Schema.Types.ObjectId, ref: 'Brand'
  },
  madeIn: {
    type: String,
    ref: 'Country'
  },
  description: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  imageUrl: {
    type: String
  }
});

ItemSchema.statics.add = function(params, callback) {
  var item = new this(params);
  item.save( err => {
    if(callback){
      callback(err, item);
    }
  })
}

ItemSchema.statics.get = function(params, callback) {
  this.find(params)
  .populate('brand category madeIn')
  .exec((err, result) => {
    if(callback){
      callback(err, result);
    }
  });
}

mongoose.model('Item', ItemSchema);
