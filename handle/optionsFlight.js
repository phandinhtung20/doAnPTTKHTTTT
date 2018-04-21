const chuyenBay= require('../model/chuyenBay.js'),
      dn= '5ad22ad480d7261dbc7a4b86',
      url = require('url'),
      mongoose= require('mongoose')

optionsFlight= (req,res, employeeRight)=> {
  let url_parts = url.parse(req.url, true);
  let query= url_parts.query;
  console.log(query);
  queryFun(query, (err, flights)=>{
    if (err) {
      res.send(err)
    } else {
      res.render('optionFlightFilter',{flights: flights, dn: dn, employeeRight: employeeRight});
    }
  });
}

function queryFun(query, callback) {
  let queryStr= [
    {
      $match: {
        DaXoa: false
      }
    }];
  if (query.type=='in') {
    queryStr= queryStr.concat([{ $match: { NoiDen: mongoose.Types.ObjectId(dn)}}]);
    if (query.local!=null) {
      queryStr= queryStr.concat([{ $match: { NoiDi: mongoose.Types.ObjectId(query.local)}}]);
    }
  } else {
    if (query.type=='out') {
      queryStr=queryStr.concat([{ $match: { NoiDi: mongoose.Types.ObjectId(dn)}}]);
      queryStr= queryStr.concat([{ $match: { NoiDen: mongoose.Types.ObjectId(query.local)}}]);
    }
  }
  if (query.date!=null) {
    console.log("not empty date");
    let begin= new Date(query.date);
    begin.setHours(7);
    let end= new Date(begin);
    end.setDate(end.getDate()+1);
    end.setHours(7);
    queryStr= queryStr.concat([
      {
        $match: {
          "ThoiGian": {
            "$gte": begin,
            "$lte": end
          }
        }
      }
    ]);
  }
  queryStr= queryStr.concat([{
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
  ]);
  chuyenBay.aggregate(queryStr, callback);
}

module.exports= optionsFlight;
