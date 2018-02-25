const sql = require('../sql.server').db;

const express = require('express');
const router = express.Router();

const CUSTOMERS = []
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '6551',
    database : 'angusales'
  })

connection.connect()



//   customerArray=[]; 
  
 function getCustomers(callback) {
     console.log("start");
    connection.query('SELECT * from customers', function(err, rows, fields){
        if(!err) {
            console.log("return",rows);
            callback(rows);;
            // console.log(customerArray);}
        }
       else {
          console.log(err);}
        
    })
  }


/* GET api listing. */
router.get('/customers', (req, res) => {
    getCustomers(function(rows){
      res.send(JSON.stringify(rows))
    });
});

router.post('/customers', (req, res) => {
    var customer = req.body.customer;
    customer.id = generateId();
    CUSTOMERS.push(customer);
    console.log("added", customer);
    res.send(JSON.stringify(customer));
});

router.put('/customers/:id', (req, res) => {
  console.log("a",req.params.id.toString());
  console.log("b",req.body.customer);

  var customerIndex = CUSTOMERS.findIndex((customer) => customer.id.toString() == req.params.id.toString());
    customerId = CUSTOMERS[customerIndex].id;
    CUSTOMERS[customerIndex] = req.body.customer;
    CUSTOMERS[customerIndex].id = customerId;
    res.send(JSON.stringify(CUSTOMERS[customerIndex]));
});

router.delete('/customers/:id', (req, res) => {
    var customerIndex = CUSTOMERS.findIndex((customer) => customer.id.toString() == req.params.id.toString());
    CUSTOMERS.splice(customerIndex, 1);
    res.status(200).send({});
});

function generateId() {
    return CUSTOMERS[CUSTOMERS.length - 1].id + 1;
}

module.exports = router;
