// Conexão com o banco de dados
var knex = require('knex')({
	client: 'mysql',
	connection: {
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'to-do-list'
	}
});
module.exports = knex