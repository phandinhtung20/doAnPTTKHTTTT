const express= require('express'),
      app= express(),
      bodyParser = require('body-parser'),
      urlencodedParser = bodyParser.urlencoded({ extended: false }),
      http= require('http').Server(app),
      mongoose= require('mongoose');

const clientBasic= require('./handle/clientBasic.js'),
      employeeFlight= require('./handle/employeeFlight.js'),
      getAddFlight= require('./handle/getAddFlight.js'),
      postAddFlight= require('./handle/postAddFlight.js'),
      optionsFlight= require('./handle/optionsFlight.js'),
      flightInfor= require('./handle/flightInfor.js')

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('./public'));

mongoose.connect('mongodb://tungphan:tungtung@ds241699.mlab.com:41699/doanpttkhtttt');
var db= mongoose.connection;

app.get('/', (req,res)=>{
  clientBasic(req,res);
});
app.options('/', (req,res)=>{
  optionsFlight(req,res, false);
});

app.get('/employee/flight', (req,res)=>{
  employeeFlight(req,res);
});

app.post('/employee/flight', urlencodedParser, (req,res)=>{
  postAddFlight(req,res);
});

app.options('/employee/flight', (req,res)=>{
  optionsFlight(req,res, true);
});

app.get('/employee/flight/add', (req,res)=>{
  getAddFlight(req,res);
});

app.get('/employee/flight/:id', (req,res)=>{
  console.log(req.params.id);
  flightInfor(req,res);
});

// chuyenBay.

http.listen(process.env.PORT||3000, function() {
  console.log("Server started");
});
