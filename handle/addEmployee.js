const bangChucVu= require("../model/bangChucVu.js")

const addEmployee= (req,res)=>{
  bangChucVu.find({}, (err,docs)=>{
    if (err) {
      res.send('Lỗi cơ sở dữ liệu');
    } else {
      res.render('addEmployee', {chucVu: docs});
    }
  })
}

module.exports = addEmployee;
