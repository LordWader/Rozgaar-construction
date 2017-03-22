var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkerSchema = new Schema({
  jobNo: Number,
  adhar_no: Array,
  mobile: Array,
  name: Array,
})

var User = mongoose.model('User', WorkerSchema);

module.exports = User;
