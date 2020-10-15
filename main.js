var http = require('http');
var fs = require('fs');
const router = require('./router');
var app = http.createServer(function (request, response) {
    var url = router.URLmapping(request.url);
    if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);