var mongoose = require('mongoose');
var CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

mongoose.model('Category', CategorySchema);
