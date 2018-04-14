const express= require('express'),
      app= express(),
      http= require('http').Server(app),
      mongoose= require('mongoose'),
      chuyenBay= require('./model/chuyenBay.js');

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('./public'));

mongoose.connect('mongodb://tungphan:tungtung@ds241699.mlab.com:41699/doanpttkhtttt');
var db= mongoose.connection;

app.get('/', (req,res)=>{
  res.render('clientBasic');
});



// chuyenBay.

http.listen(3000, function() {
  console.log("Server started");
});
