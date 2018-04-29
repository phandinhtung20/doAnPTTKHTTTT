const chuyenBay = require('../model/chuyenBay.js'),
      dn = "5ad22ad480d7261dbc7a4b86"

putFlight = (req, res) => {
  // { id: '5ad358286913b028d46b6520',
  //   MaCB: 'VN003',
  //   loai: '1',
  //   noiDiDen: '5ad22ad480d7261dbc7a4b87',
  //   hanghk: '5ad22709ca5a3c10e40bb241',
  //   time: '2018-04-15T20:47',
  //   soKH: '60',
  //   trangThai: '5ad227bedef01a1e744b1f06' }

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
