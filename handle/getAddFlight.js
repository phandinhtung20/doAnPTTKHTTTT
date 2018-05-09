const hangHangKhong= require('../model/hangHangKhong.js'),
      diaDiem= require('../model/diaDiem.js'),
      trangThai= require('../model/trangThai.js'),
      async = require('async'),
      dn= '5ad22ad480d7261dbc7a4b86'

getAddFlight= (req,res)=> {
  async.waterfall([
    function(callback) {
      hangHangKhong.find({})
      .then(hangHangKhongs=>{
        if (hangHangKhongs.length==0) {
          res.send("Error hang hang khong khong co")
        } else {
          callback(null, hangHangKhongs)
        }
      })
      .catch(error=>{
        res.send("error hangHangKhongs");
      })
    },
    function(hhk, callback) {
      diaDiem.find({})
      .then(diaDiems=>{
        if (diaDiems.length==0) {
          res.send("Error dia diem khong co")
        } else {
          callback(null, hhk, diaDiems)
        }
      })
      .catch(error=>{
        console.log(error);
        res.send("error diaDiem");
      })
    },
    function(hhk, dd, callback) {
      trangThai.find({})
      .then(trangThais=>{
        if (trangThais.length==0) {
          res.send("Error trangThai khong co")
        } else {
          callback(null, hhk, dd, trangThais)
        }
      })
      .catch(error=>{
        res.send("error trangThai");
      })
    }
  ], function(err, hhk, dd, tt) {
    res.render('addFlight',{hangHangKhongs: hhk, diaDiems: dd, trangThais: tt, dn: dn});
  });
}
module.exports= getAddFlight;
