const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      diaDiem  = require('./diaDiem.js'),
      hangHangKhong= require('./hangHangKhong.js'),
      tranngThai= require('./trangThai.js'),
      nguoiDung= require('./nguoiDung.js');

var newsSchema = new Schema({
  // _id
  MaCB            : String,
  NoiDi           : {
    type: Schema.Types.ObjectId,
    ref: diaDiem
  },
  NoiDen          :  {
    type: Schema.Types.ObjectId,
    ref: diaDiem
  },
  Hang            : {
    type: Schema.Types.ObjectId,
    ref: hangHangKhong
  },
  ThoiGian        : Date,
  DaXoa           : Boolean,
  TrangThai       : {
    type: Schema.Types.ObjectId,
    ref: tranngThai
  },
  NguoiChinhSua   : {
    type: Schema.Types.ObjectId,
    ref: nguoiDung
  },
  SoHanhKhach     : Number
});

// newsSchema.set('autoIndex', false);
var chuyenBay= module.exports= mongoose.model('chuyenBays', newsSchema);
