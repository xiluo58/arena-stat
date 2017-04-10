var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.updateUserInfo = function(req, res) {
  if(!req.user._id){
    res.status(501);
    res.json({});
    return;
  }
  let update = {};
  let body = req.body;
  update.firstName = body.firstName;
  update.lastName = body.lastName;
  update.gender = body.gender;
  User.findOneAndUpdate(
    {_id: req.user._id},
    update,
    (err, result) => {
      console.log(result);
      if(err){
        res.status(501);
        res.json(err.message);
        return;
      }
      res.json({});
    }
  )
}
