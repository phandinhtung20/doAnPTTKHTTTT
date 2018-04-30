const chucVu= require('../model/chucVu.js'),
      nguoiDung = require('../model/nguoiDung'),
      async= require('async')

const postEmployee= (req,res)=>{
  async.waterfall([
    function(callback) {
      const maNV= Math.floor(Math.random()*100000);
      var newUser= new nguoiDung({
        MaNV      : maNV,
        HoTen     : req.body.inpHoTen,
        GioiTinh  : req.body.inpGioiTinh,
        DiaChi    : req.body.inpdiaChi,
        NgaySinh  : req.body.inpNgaySinh,
        Sdt       : req.body.inpSdt,
        STK       : '',
        CMND      : '',
        Email     : req.body.inpEmail,
        MatKhau   : maNV
      });
      newUser.save().then(()=>{
        callback(null, newUser._id)
        console.log(newUser);
      }).catch((err)=>{
        console.log('err1');
        callback(err);
      })
    },
    function(_id, callback) {
      const cv= new chucVu({
        MaNV : _id,
        MaCV : req.body.inpChucVu
      })
      cv.save().then(()=>{
        console.log(cv);
        callback(null)
      }).catch((err)=>{
        console.log(err2);
        callback(err);
      })
    }
  ], (err, data)=>{
    if (err) {
      console.log(err);
      res.send('Lưu thông tin bị lỗi')
    } else {
      res.redirect('/admin/employee');
    }
  })

}

module.exports = postEmployee;
