var fs = require('fs')
var file = process.argv[2]
var read = fs.readFileSync(file).toString()
var count = read.split('\n').length - 1
console.log(count)
// console.log(read)
