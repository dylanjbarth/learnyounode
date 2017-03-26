var http = require('http')
var urls = process.argv.slice(2)
var count = 0
var responses = ['', '', '']
var handler = function(requestNum) {
  return function(response) {
    var collected = []
    var fullResponses = []
    response
        .setEncoding('utf-8')
        .on("data", function(data) {
            collected.push(data)
        })
        .on("end", function() {
            responses[requestNum] = collected.reduce(function(prev, next) {
                return prev + next
            }, '')
            count += 1
            if (count == 3) {
              printall()
            }
        })
    }
}

function printall() {
  responses.forEach(function(x) { console.log(x) })
}


for (var i = 0; i < urls.length; i++) {
  http.get(urls[i], handler(i))
}
