//sync functbons
function name(arg1, arg2) {
  //do stuff
  //result = 'stuff'
  return(result)
}


func1
func2 //async
func3
func4


function callback() {
  func3()
  func4()
}
func1()
func2(callback)

func2(() => {
  func3()
  func4()
})


//async function
//

function name(arg1, callback) {
  //do stuff
  //result = 'stuff'
  callback(result)
}


