var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hello World! This is tested with Travis!');
});
server.listen(8080);