const chuyenBay= require('../model/chuyenBay.js'),
      dn= '5ad22ad480d7261dbc7a4b86',
      mongoose= require('mongoose'),
      hangHangKhong= require('../model/hangHangKhong.js'),
      diaDiem= require('../model/diaDiem.js'),
      trangThai= require('../model/trangThai.js'),
      async = require('async')


changeFlightInfor= (req,res)=> {
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
    },
    function(hhk, dd, tt, callback) {
      queryFun(req.params.id, function(err, flight) {
        if (err) {
          res.send(err.message);
        } else {
          if(flight.length>1) {
            res.send("Lỗi cơ sở dữ liệu")
          } else {
            callback(null, hhk, dd, tt, flight[0]);
            // res.render('changeFlightInfo',{dn: dn, flight: flight[0]});
          }
        }
      });
    }
  ], function(err, hhk, dd, tt, flight) {
    console.log(flight);
    console.log(dd);
    res.render('changeFlightInfo',{hangHangKhongs: hhk, diaDiems: dd, trangThais: tt, flight: flight, dn: dn});
  });
}

function queryFun(id, callback) {
  let queryStr= [
    {
      $match: {
        _id: mongoose.Types.ObjectId(id)
      }
    },
    {
      $lookup: {
        from: 'diadiems',
        localField: "NoiDi",
        foreignField: "_id",
        as: "noiDi"
      }
    },
    {
      $lookup: {
        from: 'diadiems',
        localField: "NoiDen",
        foreignField: "_id",
        as: "noiDen"
      }
    },
    {
      $lookup: {
        from: 'hanghangkhongs',
        localField: "Hang",
        foreignField: "_id",
        as: "hangHK"
      }
    },
    {
      $lookup: {
        from: 'trangthais',
        localField: "TrangThai",
        foreignField: "_id",
        as: "trangThai"
      }
    },
    {
      $project: {
        '_id': 1,
        'MaCB': 1,
        'NoiDi': '$noiDi',
        'NoiDen': '$noiDen',
        'Hang': '$hangHK.TenHHK',
        'TrangThai': '$trangThai.TenTT',
        'ThoiGian': 1,
        'SoHanhKhach': 1
      }
    },
    {
      $unwind: "$NoiDi"
    },
    {
      $unwind: "$NoiDen"
    },
    {
      $unwind: "$Hang"
    },
    {
      $unwind: "$TrangThai"
    }
  ];
  chuyenBay.aggregate(queryStr, callback);
}

module.exports= changeFlightInfor;
