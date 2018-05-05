const chuyenBay= require('../model/chuyenBay.js'),
      dn= "5ad22ad480d7261dbc7a4b86"

postAddFlight= (req,res)=> {
  const cb= new chuyenBay({
    MaCB: req.body.inpSoHieu,
    NoiDi: (req.body.denOrDi=="1")?req.body.inpDiaDiem:dn,
    NoiDen: (req.body.denOrDi=="0")?req.body.inpDiaDiem: dn,
    Hang: req.body.inpHangHangKhong,
    ThoiGian: new Date(req.body.thoiGian),
    TrangThai: req.body.inpTrangThai,
    NguoiChinhSua : dn,
    SoHanhKhach: req.body.inpSoHanhKhach
  });
  cb.save()
  .then((data)=>{
    res.redirect('/employee/flight')
  })
  .catch(err=>{
    console.log(err);
    res.send(err);
  })
}
module.exports= postAddFlight;
