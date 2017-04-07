var express = require('express');
var router = express.Router();

// define clazzSchema
var mongoose = require('mongoose');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API works');
});



module.exports = router;
