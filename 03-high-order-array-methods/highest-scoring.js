// a function that returns the highest scoring word based on letter value
// a = 1, b = 2, etc.

const str1 = "This is a string. "
const str2 = "According to all known laws of aviation..."
const str3 = "Man, I need a taxi up to Ubud!"


function highestScore(str) {
  let arr = str.replace(/[^a-zA-Z|\s]/g, "").toLowerCase().split(" ")
  let highestScore = 0
  let highestIndex = 0

  for(let i = 0; i < arr.length; i++){
    let score = 0
    for(let j = 0; j < arr[i].length; j++){
      score += arr[i].charCodeAt(j) - 96
    }
    if(score > highestScore){
      highestScore = score
      highestIndex = i
    }
  }
  return arr[highestIndex] + " wins with a score of " + highestScore.toString()
}

console.log(highestScore(str1))
console.log(highestScore(str2))
console.log(highestScore(str3))