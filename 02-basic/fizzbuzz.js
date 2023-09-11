// Fizzbuzz array
// function takes in a number and creates an array of that length with numbers 
// divisble by 3 replaced with "Fizz" and divisible by 5 with "Buzz" 
// and both with "FizzBuzz"

function fizzBuzz(num){
  let out = []

  for(let i = 1; i <= num; i++){
    let divisible = false
    let value = ""

    if (i % 3 == 0){
      value += "Fizz"
      divisible = true
    }
    if (i % 5 == 0){
      value += "Buzz"
      divisible = true
    }
    if(!divisible){
      value = i
    }
    out.push(value)

  }


  return out
}
let start = Date.now()
console.log(fizzBuzz(15))
let end = Date.now() - start
console.log("finished in", end / 1000, "seconds")