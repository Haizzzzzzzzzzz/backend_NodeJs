require('dotenv').config();

const express = require('express')
const configViewEngine = require("./config/viewEngine")
const webRoutes = require('./routes/web')
const connection = require("./config/database")

// console.log("kiểm tra: ",process.env) // check cac du lieu dung su dung

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//congif templace engine

//config req
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extends: true})); //Parse URL-encoded bodies

// app.use(express.static('public'))
configViewEngine(app) // tach ra config dede quan ly

app.use('/',webRoutes)// như api của bên Emso SN hoặc CMC



// simple query
// connection.query(
//   'SELECT * FROM  Users u',
//   function(err, results, fields) {
//     console.log("KET QUA = ",results); // results contains rows returned by server
//     // console.log("FIELDS = ",fields); // fields contains extra meta data about results, if available
//   }
// );

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})