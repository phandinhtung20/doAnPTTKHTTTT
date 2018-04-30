const nguoiDung= require("../model/nguoiDung.js"),
      url = require('url')

const optionsEmployee= (req,res)=>{
  const url_parts = url.parse(req.url, true),
        query= url_parts.query;
  var sort= query.sort,
      name= query.name;
  if (sort!=0) sort=1;
  else sort=-1

  var queryStr= {};
  if (name!= null) queryStr= {HoTen:name}
  nguoiDung.find(queryStr).sort({HoTen: sort}).exec((err,docs)=>{
    if (err) {
      res.send("Server lỗi");
    } else {
      if (docs.length>0) {
        res.render('optionEmployeeFilter',{employees: docs})
      } else {
        res.send('<h1>Dữ liệu rỗng</h1>')
      }
    }
  })
}

module.exports = optionsEmployee;
