var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  // _id
  MaNV : {
    type: Schema.Types.ObjectId,
    ref: nguoiDungs
  },
  MaCV : {
    type: Schema.Types.ObjectId,
    ref: bangChucVus
  }
});

// newsSchema.set('autoIndex', false);
var chucVu= module.exports= mongoose.model('chucVus', newsSchema);
