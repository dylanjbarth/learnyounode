var http = require('http')
var urlParse = require('url')
var map = require('through2-map')

var port = process.argv[2]

var handler = function(request, response) {
  var url = urlParse.parse(request.url, true)
  var isGet = function() { return request.method === "GET" }
  var pathIs = function(pth) { return url.pathname === pth }
  var date = new Date(url.query.iso)
  response.writeHead(200, { 'Content-Type': 'application/json' })
  if (isGet() && pathIs("/api/parsetime")) {
      response.end(JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }))
  } else if (isGet() && pathIs("/api/unixtime")) {
    response.end(JSON.stringify({
      unixtime: date.getTime()
    }))
  }
}

var server = http.createServer(handler)
server.listen(port)
