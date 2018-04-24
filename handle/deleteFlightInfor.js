const chuyenBay= require('../model/chuyenBay.js')

deleteFlightInfor= (req,res)=> {
  chuyenBay.findOne({_id: req.params.id}, (err, flight)=> {
    if (err) {
      res.send({error: true, message: err});
    } else {
      flight.DaXoa= true;
      flight.save().then(()=>{
        res.send({error: false, message: flight});
      })
      .catch((err2)=>{
        res.send({error: true, message: err2});
      })
    }
  })
}
module.exports= deleteFlightInfor;
