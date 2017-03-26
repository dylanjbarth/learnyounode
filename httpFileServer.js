var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var fileToStream = process.argv[3]

var handler = function(request, response) {
  fs.createReadStream(fileToStream).pipe(response)
}

var server = http.createServer(handler)
server.listen(port)
