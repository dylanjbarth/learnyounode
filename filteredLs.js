var fs = require('fs')
var path = require('path')

var file = process.argv[2]
var ext = process.argv[3]

fs.readdir(file, function(err, list) {
  if (err) {
    console.log(err)
  } else {
    var exts = list.filter(function(x) {
      return path.extname(x) === '.' + ext
    }).map(function(x) {
      console.log(x)
    })
  }
})
