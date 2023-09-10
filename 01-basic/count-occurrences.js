// count the occurrences of a char within a string


// case insensitive version
function countOccurrences(str, char) {
  let count = 0
  let b = char.charCodeAt(0)

  for(let i = 0; i < str.length; i++){
    let a = str.charCodeAt(i)

    // check uppercase match
    if (b >= 65 && b <= 90){
      if (b == a || b + 32 == a){
        count++
      }

    //check lowercase match
    } else if (b >= 97 && b <= 122){
      if (b == a || b - 32 == a){
        count++
      }

    // check all other characters
    } else {
      if (b == a){
        count++
      }
    }
  }

  return count
}

var string1 = 'HELLO world!'
  
let start = Date.now()
console.log(countOccurrences(string1, 'l')) // 3
console.log(countOccurrences(string1, 'L')) // 3
console.log(countOccurrences(string1, 'z')) // 0
console.log(countOccurrences(string1, 'e')) // 1
console.log(countOccurrences(string1, 'o')) // 2
console.log(countOccurrences(string1, '!')) // 1
console.log(countOccurrences(string1, '?')) // 0

let end = Date.now() - start
console.log("finished in ", end / 1000, "seconds")
