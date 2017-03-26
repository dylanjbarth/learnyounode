var args = process.argv.slice(2)
console.log(args.reduce(function(prev, next) { return prev + Number(next) }, 0))
