var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  // _id: auto index
  TenSanBay     : String,
  DiaChiSanBay  : String
});

var diaDiem= module.exports= mongoose.model('diaDiems', newsSchema);
