var http = require('http')

var url = process.argv[2]

var handler = function(response) {
    response.setEncoding('utf-8')
    response.on("data", function(data) {
      console.log(data)
    })
}
http.get(url, handler)
