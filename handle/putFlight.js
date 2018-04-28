const chuyenBay= require('../model/chuyenBay.js'),
      dn= "5ad22ad480d7261dbc7a4b86"

putFlight= (req,res)=> {
  console.log(req.body);
  res.send('ok');
}
module.exports= putFlight;
