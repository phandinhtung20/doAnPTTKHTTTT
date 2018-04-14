const chuyenBay= require('../model/chuyenBay.js'),
      diaDiem= require('../model/diaDiem.js'),
      url = require('url');

clientBasic= (req,res)=> {
  let url_parts = url.parse(req.url, true);
  let query= url_parts.query;
  console.log(query);

  // var dd=["Đà Nẵng","Tân Sơn Nhất", "Nội Bài", "Incheon", "Changi", "Salt Lake"];
  // var qg=["Đà Nẵng, Việt Nam", "Hồ Chí Minh, Việt Nam", "Hà Nội, Việt Nam", "Incheon, Korea", "Singapo", "Utah, USA"];
  //
  // for (var i = 0; i < dd.length; i++) {
  //   var d= new diaDiem({
  //     TenSanBay   : dd[i],
  //     DiaChiSanBay: qg[i]
  //   });
  //   d.save().then(()=>{
  //     console.log("save "+i);
  //   }).catch((err)=>{
  //     console.log("error "+i);
  //   })
  // };
  // chuyenBay.find({}, (err, chuyenBays)=> {
  //   if (err) {
  //     console.log("Error: "+err);
  //   } else {
  //     console.log("Data: "+chuyenBays.length);
  //   }
  // });
  res.render('clientBasic');
}
module.exports= clientBasic;
