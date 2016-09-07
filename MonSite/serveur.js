var http = require('http');
var path = require('path');
var fs = require('fs');

var serveur = http.createServer(function(req, res) {
    if (req.url === '/') {
        var indexPath = path.join(__dirname, 'src', 'index.html');
        fs.readFile(indexPath, function (err, content) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('Not found');
    }
});

serveur.listen(8080, function() {
   console.log('Le serveur a demarre');
});