const chuyenBay= require('../model/chuyenBay.js'),
      url = require('url');

employeeFlight= (req,res)=> {
  let url_parts = url.parse(req.url, true);
  let query= url_parts.query;
  console.log(query);
  res.render('employeeFlight');
}
module.exports= employeeFlight;
