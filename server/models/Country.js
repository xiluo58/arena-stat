var mongoose = require('mongoose');
var CountrySchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  }
});

mongoose.model('Country', CountrySchema);
