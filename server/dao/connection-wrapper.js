const mysql = require('mysql2');
const mysqlConfig = require('../mysqlConfig.js');
const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
	err
		? console.log('Failed to connect to DB', err)
		: console.log('DB connected...');
});

let execute = (query) => {
	return new Promise((resolve, reject) => {
		connection.query(query, (err, result) => {
			return err ? reject(err) : resolve(result);
		});
	});
};

function executeWithParameters(sql, parameters) {
	return new Promise((resolve, reject) => {
		connection.query(sql, parameters, (err, result) => {
			return err ? reject(err) : resolve(result);
		});
	});
}

module.exports = {
	execute,
	executeWithParameters,
};
