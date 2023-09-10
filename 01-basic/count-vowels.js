// counts the vowels in a given string
// includes y

let string1 = "stringy"
let string2 = "vowels"
let string3 = "to the moon!"
let string4 = "John Madden Pizza, aeiou!"

function countVowels(str){
  let count = 0
  let test = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
  for(let i = 0; i < test.length; i++){
    if( 
      test[i] == 'a' ||
      test[i] == 'e' ||
      test[i] == 'i' ||
      test[i] == 'o' ||
      test[i] == 'u' ||
      test[i] == 'y'
      ){
        count++
      }
  }
  return count
}

console.log(countVowels(string1)) // 2
console.log(countVowels(string2)) // 2
console.log(countVowels(string3)) // 4
console.log(countVowels(string4)) // 10