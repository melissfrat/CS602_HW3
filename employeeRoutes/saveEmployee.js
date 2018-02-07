var DB = require('./dbConnection.js');
var Employee = DB.getModel();

module.exports =
    function saveEmployee(req, res, next) {


        var employee = new Employee({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });

        employee.save(function (err) {
            if (err)
                console.log("Error : %s ", err);
            res.redirect('/employees');
        });

    };
