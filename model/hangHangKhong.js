var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  // _id
  TenHHK  : String,
  QuocGia : String
});

// newsSchema.set('autoIndex', false);
var hangHangKhong= module.exports= mongoose.model('hangHangKhongs', newsSchema);
