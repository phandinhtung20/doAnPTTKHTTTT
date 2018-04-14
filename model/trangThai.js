var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  // _id
  TenTT : String
});

var trangThai= module.exports= mongoose.model('trangThais', newsSchema);
