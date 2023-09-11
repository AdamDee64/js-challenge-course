// find the missing number in a series

function findMissingNumber(arr){

  let n = arr.length + 1
  if (n == 1) return 1

  let expectedSum = n * (n + 1) / 2
  let actualSum = 0

  for(let i = 0; i < arr.length; i++){
    actualSum += arr[i]
  }

  return expectedSum - actualSum
}


console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8, 9, 10]))  // 4
console.log(findMissingNumber([1, 2, 4]))                     // 3
console.log(findMissingNumber([1, 2, 4, 5, 6, 7, 8]))         // 3
console.log(findMissingNumber([9, 7, 5, 3, 1, 8, 6, 4, 2]))   // 10
console.log(findMissingNumber([2, 3, 4, 5, 6, 7, 8, 9, 10]))  // 1
console.log(findMissingNumber([]))                            // 1