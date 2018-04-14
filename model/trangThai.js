var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  MaTT  : Schema.Types.ObjectId,
  TenTT : String
});

var trangThai= module.exports= mongoose.model('trangThais', newsSchema);
