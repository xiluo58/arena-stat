var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./Brand');
var ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: Schema.Types.ObjectId, ref: 'Brand'
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
