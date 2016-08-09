var http = require('http');
var app = require('./config/express');

var uriBanco = 'mongo/teste';

require('./config/database')(uriBanco);

http.createServer(app)
.listen(3000, function() {
	console.log('Servidor iniciado na porta 3000. Nao se esqueca de iniciar o servidor do mongo com o comando mongod');
});