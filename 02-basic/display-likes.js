// display a "x likes this" message based on the amount of names 
// in a given array

function displayLikes(arr) {
  switch(arr.length){
    case 0:
      return "No one likes this."
    case 1:
      return `${arr[0]} likes this.`
    case 2:
      return `${arr[0]} and ${arr[1]} like this.`
    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this.`
    default:
      return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this.`
  }
  return "¯\_(ツ)_/¯" 
}

let start = Date.now()
console.log(displayLikes([]))
console.log(displayLikes(["Master Splinter"]))
console.log(displayLikes(["Bebop", "Rocksteady"]))
console.log(displayLikes(["Shredder", "Krang", "Baxter"]))
console.log(displayLikes(["Michelangelo", "Donatello", "Raphael", "Leonardo"]))
let end = Date.now() - start
console.log("finished in", end / 1000, "seconds")