const chuyenBay= require('../model/chuyenBay.js'),
      dn= '5ad22ad480d7261dbc7a4b86',
      mongoose= require('mongoose')

flightInfor= (req,res)=> {
  queryFun(req.params.id, function(err, flight) {
    if (err) {
      res.send(err.message);
    } else {
      if(flight.length>1) {
        res.send("Lỗi cơ sở dữ liệu")
      } else {
        res.render('flightInfo',{dn: dn, flight: flight[0]});
      }
    }
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

module.exports= flightInfor;
