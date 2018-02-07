var mongoose = require('mongoose');

var dbUrl = 'mongodb://127.0.0.1:27017/cs602db';
var connection = null;
var model = null;

var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var employeeSchema = new Schema({
    firstName: String,
    lastName: String
});


module.exports = {	
	getModel: function getModel() {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl);
			model = connection.model("EmployeeModel", 
								employeeSchema);
		};
		return model;
	}
};
























