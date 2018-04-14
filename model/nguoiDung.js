var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  // _id
  MaNV      : String,
  HoTen     : String,
  GioiTinh  : String,
  DiaChi    : String,
  NgaySinh  : Date,
  Sdt       : String,
  STK       : String,
  CMND      : String,
  Email     : String,
  MatKhau   : String
});

// newsSchema.set('autoIndex', false);
var nguoiDung= module.exports= mongoose.model('nguoiDungs', newsSchema);
