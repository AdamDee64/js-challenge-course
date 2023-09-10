// return a string with the first letter of each word capitalized

let title1 = "THE LORD OF THE RINGS BY J.R.R. TOLKIEN"
let title2 = "book 1: the fellowship of the ring"
let title3 = "bOOK 2: tHE tWO tOWERS"
let title4 = "bOoK 3: tHe ReTuRn Of ThE kInG"

function titleCase(str) {
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
  return title
}

console.log(titleCase(title1))
console.log(titleCase(title2))
console.log(titleCase(title3))
console.log(titleCase(title4))