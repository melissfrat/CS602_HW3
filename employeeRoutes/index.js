var express = require('express');
var router = express.Router();

//modules
var addEmployee = require("./addEmployee");
var saveEmployee = require("./saveEmployee");
var deleteEmployee = require("./deleteEmployee");
var displayEmployees = require("./displayEmployees");
//var editEmployee = require("./editEmployee");

//display all the employees from database
router.get('/', function (req, res) {
    res.redirect('/employees');
});

//display all employees
router.get('/employees', displayEmployees);

// show form to add a new employee
router.get('/employee/add', addEmployee);
// save the new employee to database
router.post('/employee/add', saveEmployee);
router.get('/employee/delete/:firstName/:lastName', deleteEmployee);


module.exports = router;