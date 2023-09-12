// find the first non-repeating character within a given string

function firstNonRepeatingChar(str){
  let compare = str[0]
  let count = 0
  for(let i = 1; i < str.length; i++){
    if(str[i] == compare){
      compare = str[i]
      count++
    } else if (str[i] != compare && count > 0){
      compare = str[i]
      count = 0
    } else {
      return compare
    }
  }
  return null
}

console.log(firstNonRepeatingChar('aabbccdeeff'))     // d
console.log(firstNonRepeatingChar('aabbcc'))          // null
console.log(firstNonRepeatingChar('556622991169233')) // 6