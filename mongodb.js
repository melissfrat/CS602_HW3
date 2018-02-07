
//defining variables and mongoose connection
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var credentials = require("./credentials.js")

var dbUrl = 'mongodb://127.0.0.1:27017/cs602db';
var connection = mongoose.createConnection(dbUrl);

var EmployeeDb = require('./schemaEmployee.js');
var Employee = EmployeeDb.getModel(connection);

//making sure that it successfully connects to MongoClient
MongoClient.connect(dbUrl, function (err, db) {
    if (err) throw err;
    console.log('Successfully connected to',
        db.s.databaseName);

    // Do database operations

    db.close();
});



connection.on("open", function () {
    var employee;

    employee = new Employee({
        firstName: 'John',
        lastName: 'Smith'

    });
    employee.save();

    employee = new Employee({
        firstName: 'Jane',
        lastName: 'Smith'

    });
    employee.save();

    employee = new Employee({
        firstName: 'John',
        lastName: 'Doe'

    });
    employee.save();

    employee.save(function(err) {
        connection.close();
        if (err) throw err;
        console.log("Successful!");
    });

});