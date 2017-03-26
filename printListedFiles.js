var fs = require('fs')
var path = require('path')
var asyncListFiles = require('./asyncListFiles')

var dir = process.argv[2]
var ext = process.argv[3]

function printer(err, list) {
  if (err) {
    console.log(err)
  } else {
    list.map(function(x) { console.log(x) })
  }
}

asyncListFiles(dir, ext, printer)
