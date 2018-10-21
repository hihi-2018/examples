function sayHello() {
  console.log('hi')
}

console.log(1)
setTimeout(sayHello, 1000 * Math.random())
console.log(2)

