const chuyenBay= require('../model/chuyenBay.js'),
      dn= '5ad22ad480d7261dbc7a4b86'

employeeFlight= (req,res)=> {
  query((err, flights)=>{
    if (err) {
      res.send(err)
    } else {
      // console.log(JSON.stringify(flights));
      res.render('employeeFlight',{flights: flights, dn: dn});
    }
  });
}

function query(callback) {
  chuyenBay.aggregate([
    {
      $match: {
        DaXoa: false
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
  ], callback);
}
module.exports= employeeFlight;
