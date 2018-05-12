var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(
        200, {
            "Content-Type": "text/html"
        }
    );

    if (request.url === '/') {
        response.write('<h1>Meu App NodeJS</h1>');
    } else if (request.url === '/pos') {
        response.write('<h1>Pós Graduação SENAC</h1>');
    } else {
        response.write('<h1>Erro de rota</h1>');
    }

    response.end();

});

server.listen(8080, function() {
    console.log("Servidor rodando! Acesse: http://localhost:8080");
});
