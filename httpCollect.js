var http = require('http')
var url = process.argv[2]

var handler = function(response) {
    var collected = []
    response
        .setEncoding('utf-8')
        .on("data", function(data) {
            collected.push(data)
        })
        .on("end", function() {
            var count = collected.reduce(function(prev, next) {
                return prev + next.length
            }, 0)
            console.log(count)
            console.log(collected.reduce(function(prev, next) {
                return prev + next
            }, ''))
        })
}
http.get(url, handler)
