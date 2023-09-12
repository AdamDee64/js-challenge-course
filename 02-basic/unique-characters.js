// return true if all characters in a given string are unique, otherwise
// return false.

function areAllCharsUnique(str){
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < str.length; j++){
      if(i == j) continue
      if(str[i] == str[j]) return false
    }
  }
  return true
}

console.log(areAllCharsUnique('bandit'))    // true
console.log(areAllCharsUnique('thief'))     // true
console.log(areAllCharsUnique('rogue'))     // true
console.log(areAllCharsUnique('pilferer'))  // false
