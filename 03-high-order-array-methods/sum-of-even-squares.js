// a function that takes in an array that returns a sum of squares of only
// the even numbers in the array. 

const arr1 = [0, 2, 4, 5, 6]
const arr2 = [1, 3, 5, 9]
const arr3 = [10, 2, 2, 2, 1, 2]
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8]

function sumOfEvenSquares(arr) {
  let output = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) output += arr[i] * arr[i]
  }
  return output
}


console.log(sumOfEvenSquares(arr1))
console.log(sumOfEvenSquares(arr2))
console.log(sumOfEvenSquares(arr3))
console.log(sumOfEvenSquares(arr4))