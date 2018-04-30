var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  // _id
  MaNV      : {
    type: String,
    unique: true
  },
  HoTen     : String,
  GioiTinh  : String,
  DiaChi    : String,
  NgaySinh  : Date,
  Sdt       : String,
  STK       : {
    type: String,
    default: ''
  },
  CMND      : {
    type: String,
    default: ''
  },
  Email     : {
    type: String,
    unique: true
  },
  MatKhau   : String
});

// newsSchema.set('autoIndex', false);
var nguoiDung= module.exports= mongoose.model('nguoiDungs', newsSchema);
