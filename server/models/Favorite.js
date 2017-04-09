var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./User');
require('./Item');
var FavoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }
});

FavoriteSchema.statics.add = function(params, callback){
  var fav = new this(params);
  fav.save( err => {
    if(callback){
      callback(err, fav);
    }
  })
};

mongoose.model('Favorite', FavoriteSchema);
