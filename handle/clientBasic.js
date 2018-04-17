const chuyenBay= require('../model/chuyenBay.js'),
      diaDiem= require('../model/diaDiem.js'),
      url = require('url');

clientBasic= (req,res)=> {
  diaDiem.find()
  .then(locals=>{
    res.render('clientBasic',{locals: locals});
  })
  .catch(err=>{
    res.send(err);
  })
}
module.exports= clientBasic;
