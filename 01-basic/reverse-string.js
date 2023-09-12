// reverse a string

let string1 = "This is a string"
let string2 = "!!@@** boogie time tonight **%%$$"

function reverseString(str){
  let output = ""

  for(let i = str.length - 1; i >= 0; i--){
    output += str[i]
  }
  
  return output
}

let start = Date.now()
console.log(reverseString(string1))
console.log(reverseString(string2))
console.log(reverseString(""))
let end = Date.now() - start
console.log("finished in ", end / 1000, "seconds")