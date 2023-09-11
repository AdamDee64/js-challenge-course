// given two arrays, return a new array containing the common values
// within them

function arrayIntersection(arr1, arr2){
  let firstPass = []
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] == arr2[j]){
        firstPass.push(arr1[i])
      }
    }
  }
  let out = []
  for(let i = 0; i < firstPass.length; i++){
    let unique = true
    
    for(let j = 0; j < out.length; j++){
      if (firstPass[i] == out[j]){
        unique = false
        break
      }
    }
    if(unique){
      out.push(firstPass[i])
    }
  }
  return out
}

let array1 = [0, 0, 3, 6, 6, 6, 6, 6, 9, 9]
let array2 = [1, 3, 5, 7, 9]
let array3 = [2, 4, 6, 8, 0]


let start = Date.now()
console.log(arrayIntersection(array1, array2))  // [3, 9]
console.log(arrayIntersection(array1, array3))  // [0, 6]
console.log(arrayIntersection(array2, array3))  // empty array []
let end = Date.now() - start
console.log("finished in", end / 1000, "seconds")