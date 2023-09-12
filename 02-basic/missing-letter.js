// find missing letter in a consecutive sequence of letters

// function findMissingLetter(arr){
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   const startIndex = alphabet.indexOf(arr[0])
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != alphabet[startIndex + i]){
//       return alphabet[startIndex + i]
//     }
//   }
//   return ''
// }

function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0)
  for (let i = 0; i < arr.length; i++){
    const current = arr[i].charCodeAt(0)

    if (current - start > 1) {
      return String.fromCharCode(start + 1)
    }
    
    start = current


  }
  return ''
}


console.log(findMissingLetter(['a', 'b', 'd', 'e', 'f', 'g'])) // 'c'
console.log(findMissingLetter(['U', 'W', 'X', 'Y', 'Z']))      // 'V'
console.log(findMissingLetter(['g', 'h', 'j', 'k', 'l', 'm'])) // 'i'
console.log(findMissingLetter(['A', 'B', 'C', 'D', 'E', 'G'])) // 'F'
