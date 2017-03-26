var http = require('http')
var map = require('through2-map')

var port = process.argv[2]
var fileToStream = process.argv[3]

var handler = function(request, response) {
  if (request.method === "POST") {
      request.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(response)
  }
}

var server = http.createServer(handler)
server.listen(port)
