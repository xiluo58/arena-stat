var express = require('express');
var router = express.Router();

// define clazzSchema
var mongoose = require('mongoose');
var clazzSchema = mongoose.Schema({
  _id: String,
  winCount: Array
});

var Clazz = mongoose.model('Clazz', clazzSchema);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add/:id/:win/', function(req, res, next) {
  Clazz.findById(req.params.id, function(err, found){
    if(err) {
      return console.error(err);
    }
    if(!found){
      var winCount = Array(13);
      winCount.fill(0);
      winCount[req.params.win] = 1;
      var clazz = new Clazz(
        {
          _id: req.params.id,
          winCount: winCount
        }
      )
      clazz.save(function(err, clazz){
        if(err){
          return console.error(err);
        }
        res.send(clazz);
      })
    }else{
      var winCount = found.winCount;
      found.winCount.set(req.params.win, found.winCount[req.params.win] + 1);
      found.save(function(err, result){
        if(err){
          return console.error(err);
        }
        res.send(result);
      });
    }
  })
});

router.get('/:id', function(req, res, next){
  Clazz.findById(req.params.id, function(err, found){
    if(err) {
      return console.error(err);
    }
    res.send(found);
  })
});

module.exports = router;
