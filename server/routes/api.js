const express = require('express');
const router = express.Router();

const CUSTOMERS = [
    {id: 1, name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21)},
    {id: 2, name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12)},
    {id: 3, name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6)},
    {id: 4, name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15)},
    {id: 5, name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4)}
]

/* GET api listing. */
router.get('/customers', (req, res) => {
  res.send(JSON.stringify(CUSTOMERS));
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
