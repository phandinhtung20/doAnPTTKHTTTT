const express= require('express'),
      app= express(),
      bodyParser = require('body-parser'),
      urlencodedParser = bodyParser.urlencoded({ extended: false }),
      http= require('http').Server(app),
      mongoose= require('mongoose');

const clientBasic= require('./handle/clientBasic.js'),
      employeeFlight= require('./handle/employeeFlight.js'),
      getAddFlight= require('./handle/getAddFlight.js')

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('./public'));

mongoose.connect('mongodb://tungphan:tungtung@ds241699.mlab.com:41699/doanpttkhtttt');
var db= mongoose.connection;

app.get('/', (req,res)=>{
  clientBasic(req,res);
});

app.get('/employee/flight', (req,res)=>{
  employeeFlight(req,res);
});
app.post('/employee/flight', urlencodedParser, (req,res)=>{
  console.log(req.body);
  res.send("end");
});

app.get('/employee/flight/add', (req,res)=>{
  getAddFlight(req,res);
});

// chuyenBay.

http.listen(3000, function() {
  console.log("Server started");
});
