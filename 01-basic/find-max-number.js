// find max number in an array
// positive numbers only

let arr1 = [4, 7, 2, 1, 6, 8, 2, 1, 2, 5, 0]
let arr2 = [345, 315, 158, 158, 134, 846, 245, 733, 578]
let arr3 = [999, 995, 993, 994, 899, 990, 898, 991]
let arr4 = [41, 92, 45, 82, 72, 20, 84, 24, 57, 93]

function findMaxNumber(arr){
  let max = arr[0]
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max
}

console.log(findMaxNumber(arr1)) // 8
console.log(findMaxNumber(arr2)) // 846
console.log(findMaxNumber(arr3)) // 999
console.log(findMaxNumber(arr4)) // 93