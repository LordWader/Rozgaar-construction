var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  username: {type: String,
        required: true, "Please Enter Username"},
  password: {type: String,
        required: true, "Please Enter Password"}
})

var Admin = mongoose.model('Admin', AdminSchema);


module.exports = Admin;
