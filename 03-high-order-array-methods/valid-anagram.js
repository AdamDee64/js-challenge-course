// a function that compares two strings and returns true or false if the strings
// are anagrams of one another. 

let str1a = "listen"
let str1b = "silent"
let str2a = "united"
let str2b = "untied"
let str3a = "hello"
let str3b = "world"
let str4a = "astronomer"
let str4b = "moonstarer"

function isAnagram(str1, str2){
  if(str1.length != str2.length) return false
  let test1 = str1.split("").sort()
  let test2 = str2.split("").sort()

  for(let i = 0; i < test1.length; i++){
    if(test1[i] != test2[i]) return false
  }
  return true
}

console.log(isAnagram(str1a, str1b))
console.log(isAnagram(str2a, str2b))
console.log(isAnagram(str3a, str3b))
console.log(isAnagram(str4a, str4b))