// checks to see if a word or a phrase is a palendrome
// checks letters only, no numbers or special characters

let string1 = "Racecar!"
let string2 = "** racecars! **"
let string3 = "A man, a plan, a canal, Panama"
let string4 = "I man am regal, a German am I"

function isPalendrome(str){
  let test = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
  const end = test.length - 1

  for(let i = 0; i < test.length / 2; i++){
    if(test[i] != test[end - i]){
      return false
    }
  }
  return true
}

let start = Date.now()
console.log(isPalendrome(string1))  // true
console.log(isPalendrome(string2))  // false
console.log(isPalendrome(string3))  // true
console.log(isPalendrome(string4))  // true
let end = Date.now() - start
console.log("finished in ", end / 1000, "seconds")