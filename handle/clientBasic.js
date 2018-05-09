const chuyenBay= require('../model/chuyenBay.js'),
      diaDiem= require('../model/diaDiem.js'),
      url = require('url'),
      dn= '5ad22ad480d7261dbc7a4b86'

clientBasic= (req,res)=> {
  diaDiem.find()
  .then(locals=>{
    res.render('clientBasic',{locals: locals, dn: dn});
  })
  .catch(err=>{
    res.send(err);
  })
}
module.exports= clientBasic;
