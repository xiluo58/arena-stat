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
mongoose.model('Item', ItemSchema);
