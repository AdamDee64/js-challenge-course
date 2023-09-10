// remove duplicate entries from an array

let arr1 = [1,2,3,4,5,6,7,8,9,0]
let arr2 = [1,1,2,2,3,4,5,6,7,8,8,9,9,0]
let arr3 = ["to", "be", "or", "not", "to", "be"]
let arr4 = ["a", "b" ,"c","d","c","b", 1, 3, 5, 3, 2, 6, 3, 5]

// my way without using js methods
function removeDuplicates(arr){
  let out = [arr[0]]
  
  for(let i = 1; i < arr.length; i++){
    let unique = true
    
    for(let j = 0; j < out.length; j++){
      if (arr[i] == out[j]){
        unique = false
        break
      }
    }
    if(unique){
      out.push(arr[i])
    }
  }
  return out
}

// with js methods 1
// function removeDuplicates(arr) {
//   const uniqueArr = []
  
//   for(let i=0; i< arr.length; i++){
//     if(!uniqueArr.includes(arr[i])){
//       uniqueArr.push(arr[i])
//     }
//   }
//   return uniqueArr
// }

// with js methods 2
// function removeDuplicates(arr){
//   return Array.from(new Set(arr))
// }

let start = Date.now()
console.log(removeDuplicates(arr1))
console.log(removeDuplicates(arr2))
console.log(removeDuplicates(arr3))
console.log(removeDuplicates(arr4))

let end = Date.now() - start
console.log("finished in ", end / 1000, "seconds")