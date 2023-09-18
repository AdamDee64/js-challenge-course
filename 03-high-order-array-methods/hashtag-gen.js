// a function that returns a hashtag based on a string
// the hashtag will capitalize each letter of the word and remove 
// special characters and spaces
// returns false if string is over 140 characters or under 4 characters

let str1 = "i got a new car"
let str2 = "let's go brandon"
let str3 = "cat"
let str4 = "dont think that you can just hashtag any string and put it out there like it's totally acceptable because it isnt and if you think it is well then i don't know what's wrong with you."

function hashtagThis(str) {
  let capNextLetter = true
  let title = ""

  for(let i = 0; i < str.length; i++){
    let a = str.charCodeAt(i)

    if(capNextLetter) {
      if(a >= 97 && a <= 122){
        title += String.fromCharCode(a - 32)
      } else {
        title += String.fromCharCode(a)
      }        
      capNextLetter = false
      
    } else {
      if (a >= 65 && a <= 90){
        title += String.fromCharCode(a + 32)
      } else {
        title += String.fromCharCode(a)
      }
      
    }
    
    // if current character is space or period, next letter will be caps
    if(a == 32 || a == 46) {
      capNextLetter = true
    } 
    
  }
  if (title.length > 140 || title.length < 5) return false
  return "#" + title.replace(/[^a-zA-Z]/g, "")
}



function hashtagThat(str) {
  let title = str.toLowerCase().split(/[^a-zA-Z']/g)
  let capitalized = title.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  title = "#"
  for(let i = 0; i < capitalized.length; i++){
    title += capitalized[i]
  }
  if (title.length > 140 || title.length < 5) return false
  title = title.replace(/'/g, "")
  return title
  
}


console.log(hashtagThat(str2))
console.log(hashtagThat(str1))  
console.log(hashtagThis(str2))
console.log(hashtagThis(str3))  // false
console.log(hashtagThis(str4))  // false
console.log(hashtagThis(""))    // false