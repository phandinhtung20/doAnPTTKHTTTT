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
      flightInfor= require('./handle/flightInfor.js'),
      deleteFlightInfor= require('./handle/deleteFlightInfor.js'),
      changeFlightInfor= require('./handle/changeFlightInfor.js'),
      putFlight= require('./handle/putFlight.js'),
      employeeManager= require('./handle/employeeManager.js'),
      optionsEmployee= require('./handle/optionsEmployee.js'),
      addEmployee= require('./handle/addEmployee.js'),
      postEmployee= require('./handle/postEmployee.js')

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('./public'));

mongoose.connect('mongodb://tungphan:tungtung@ds241699.mlab.com:41699/doanpttkhtttt');
var db= mongoose.connection;

// Client
app.get('/', (req,res)=>{
  clientBasic(req,res);
});
app.options('/', (req,res)=>{
  optionsFlight(req,res, false);
});

// Employee - flight
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
  flightInfor(req,res);
});

app.get('/employee/flight/change/:id', (req,res)=>{
  changeFlightInfor(req,res);
});

app.delete('/employee/flight/:id', (req,res)=>{
  deleteFlightInfor(req,res);
});

app.put('/employee/flight', urlencodedParser, (req,res)=>{
  putFlight(req,res);
});

// Employee manager
app.get('/admin/employee', (req,res)=>{
  employeeManager(req,res);
})

app.options('/admin/employee', (req,res)=>{
  optionsEmployee(req,res);
});

app.post('/admin/employee', urlencodedParser, (req,res)=>{
  postEmployee(req,res);
});

app.get('/admin/employee/add', (req,res)=>{
  addEmployee(req,res);
})

http.listen(process.env.PORT||3000, function() {
  console.log("Server started");
});
