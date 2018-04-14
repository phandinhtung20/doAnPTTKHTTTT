var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  MaCB            : Schema.Types.ObjectId,
  NoiDi           : String,
  NoiDen          : String,
  Hang            : Schema.Types.ObjectId,
  ThoiGian        : Date,
  DaXoa           : Boolean,
  TrangThai       : Schema.Types.ObjectId,
  NguoiChinhSua   : Schema.Types.ObjectId,
  SoHanhKhach     : Number
});

// newsSchema.set('autoIndex', false);
var chuyenBay= module.exports= mongoose.model('chuyenBays', newsSchema);
