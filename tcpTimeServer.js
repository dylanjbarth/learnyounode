var net = require('net')

var port = process.argv[2]

var zeroPad = function(num) {
  if (typeof num !== 'string') {
    num = String(num)
  }
  return num.length === 1 ? '0' + num : num
}

var listener = function(socket) {
  var date = new Date()
  var data = (
    zeroPad(date.getFullYear()) +
    '-' +
    zeroPad(date.getMonth() + 1) +
    '-' +
    zeroPad(date.getDate()) +
    ' ' +
    zeroPad(date.getHours()) +
    ':' +
    zeroPad(date.getMinutes())
  )
  socket.end(data + '\n')
}

var server = net.createServer(listener)
server.listen(port)
