var fs = require('fs')

fs.readFile('fssdf.js', 'utf8', (err, data) => {
  if(err) throw(err)
  console.log(data)
})

var arr = [1,2,3,4]
arr.map((item, index, array) => console.log(item, index, array))
