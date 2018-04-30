const chuyenBay = require('../model/chuyenBay.js'),
      dn = "5ad22ad480d7261dbc7a4b86"

putFlight = (req, res) => {

  if (req.body.id == null ||
    req.body.MaCB == null ||
    req.body.loai == null ||
    req.body.noiDiDen == null ||
    req.body.hanghk == null ||
    req.body.time == null ||
    req.body.soKH == null ||
    req.body.trangThai == null) {
      res.send({status: false, message: "Không đủ thông tin"});
    } else {
      chuyenBay.findOne({_id: req.body.id}, (err, doc)=> {
        if (err) {
          res.send({status: false, message: "Lỗi cơ sở dữ liệu"});
        } else {
          if (req.body.loai==1) {
            doc.NoiDen= dn;
            doc.NoiDi= req.body.noiDiDen;
          } else {
            if (req.body.loai==0) {
              doc.NoiDi= dn;
              doc.NoiDen= req.body.noiDiDen;
            }
          }
          doc.Hang= req.body.hanghk;
          doc.ThoiGian= req.body.time;
          doc.trangThai= req.body.trangThai;
          doc.SoHanhKhach= req.body.soKH;

          doc.save().then(()=>{
            res.send({status: true, message: doc});
          })
          .catch((err2)=>{
            res.send({status: false, message: err2});
          })
        }
      })
    }
}
module.exports = putFlight;
