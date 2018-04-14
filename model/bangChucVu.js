var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  // _id
  TenCV     : String,
  HeSoLuong : Number
});

// newsSchema.set('autoIndex', false);
var bangChucVu= module.exports= mongoose.model('bangChucVus', newsSchema);
