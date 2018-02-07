var DB = require('./dbConnection.js');
var Employee = DB.getModel();

module.exports = function displayEmployees (req, res, next) {
    Employee.find({}, function (err, employees) {
        if (err)
            console.log("Error: ", err);

        var results = employees.map(function (employee) {
            return {
                firstName: employee.firstName,
                lastName: employee.lastName
            }

        });
        res.render('employeeListView', {title: "List of Employees", data:results});
    });

};