const chuyenBay= require('../model/chuyenBay.js'),
      diaDiem= require('../model/diaDiem.js'),
      dn= '5ad22ad480d7261dbc7a4b86',
      async = require('async')

employeeFlight= (req,res)=> {
  diaDiem.find()
  .then(locals=>{
    res.render('employeeFlight',{locals: locals, dn: dn});
  })
  .catch(err=>{
    res.send(err);
  })
}
module.exports= employeeFlight;
