const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lavajato"
});
con.connect(function (err) {
  if (err) throw err;
});
//=================================================
app.use(cors());
 //===================================================
  app.get('/', (req, res, next) => {
    con.query("SELECT * FROM clientes", function (err, result, fields) {

      res.status(200).send(result.map(item => ({
        name: item.name,
        license: item.license,
        model: item.model,
      })))
      
    });
  });




module.exports = app;