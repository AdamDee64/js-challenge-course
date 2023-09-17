const numbers = [1, 2, 3, 4, 5]

/*
javascript provides some built-in methods (functions) that perform common tasks
on arrays.

first I will write out a long form version of the function,
then the javascript method equivalent.

unlike a primitive type, like an integer, when an array is passed to a function, 
it is passed by pointer. As a result, any alterations made with the pointer as a
reference will be applied to the original array. if you want to keep the 
original array and have a copy with the alterations, a new array must be made.

the javascript built in methods listed here will not alter the original array.
*/

/*
map - performs a provided function on every element in an array
returns a new array.
*/
console.log(" ")
console.log("-------------------------------------------------------")
console.log("map method:")
console.log(" ")
function addFiveToArray(arr){
  var output = new Array(0)
  for(let i = 0; i < arr.length; i++){
    output.push(arr[i] + 5)
  }
  return output
}
/* built in method */
const addFive = numbers.map(number => number + 5) // shortened arrow syntax

console.log(addFiveToArray(numbers), "long form method")  
console.log(addFive, "built-in method")
console.log(numbers, "the original array is unaltered")

/*
filter - returns a new array with every value that satisfies a given 
condition (true/false check)
*/
console.log(" ")
console.log("-------------------------------------------------------")
console.log("filter method:")
console.log(" ")
function removeOddNumbers(arr){
  var output = new Array(0)
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      output.push(arr[i])
    }
  }
  return output
}
/* built in method */
const evenNumbers = numbers.filter(number => number % 2 == 0)

console.log(removeOddNumbers(numbers), "long form method")
console.log(evenNumbers, "built-in method")
console.log(numbers, "the original array is unaltered")

/*
reduce - provide a value to be altered based on a function that checks or 
performs an operation on every value in the array.
if a starting value is not supplied, the first element in the array is used and
it will start iterating at the second value
returns a single value
*/
console.log(" ")
console.log("-------------------------------------------------------")
console.log("reduce method:")
console.log(" ")
function sumArray(arr, value){
  let i;
  let output;
  if(value){
    i = 0
  } else {
    value = arr[0]
    i = 1
  }
  output = value
  for(i; i < arr.length; i++){
    output += arr[i]
  }
  return output
}
/* recurive */
function reSumArray(arr, value, i = 0){
  if(!value) value = arr[i]
  else value += arr[i]
  i++
  if(i >= arr.length) return value
  return reSumArray(arr, value, i)
}
/* built in method */
const sum = numbers.reduce((value, number) => {
  return value + number
}, 15)

console.log(sumArray(numbers), "long form method")      
console.log(sumArray(numbers, 15),"long form, start value provided")   
console.log(reSumArray(numbers), "recursive, no start value provided")        
console.log(reSumArray(numbers, 15), "recursive, start value provided")    
console.log(reSumArray(numbers, 10, 3), "recursive, start value and starting index provided") 
console.log(sum, "built-in method")                        
console.log(numbers, "the original array is unaltered")

/*
forEach - iterates through an array and applies a function utilizing each element.
Does not return an array or alter the original
*/
console.log(" ")
console.log("-------------------------------------------------------")
console.log("forEach method:")
console.log(" ")
function printAll(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(i)
  }
}

printAll(numbers)
numbers.forEach((number) => {
  console.log(number)
})
console.log(numbers, "original array")

/*
find - returns the first array element that matches a condition
if not found, returns "undefined"
*/
console.log(" ")
console.log("-------------------------------------------------------")
console.log("find method:")
console.log(" ")

function divisibleBy(arr, x){
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % x == 0) return arr[i]
  }
  return undefined
}
const findNumber = numbers.find((number) => number % 5 == 0)
const findNumber2 = numbers.find((number) => number % 6 == 0)
console.log("first number in array divisible by n")
console.log(divisibleBy(numbers, 5), "long form, n = 5")
console.log(divisibleBy(numbers, 6), "long form, no match")
console.log(findNumber, "built-in method, n = 5")
console.log(findNumber2, "built-in method, no match")
console.log(numbers, "original array is unaltered")
/*
some - checks if at least one array element satisfys a condition
returns true or false
*/
console.log(" ")
console.log("-------------------------------------------------------")
console.log("some method:")
console.log(" ")
function doesContain(arr, x) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == x) return true
  }
  return false
}
const constainsFive = numbers.some((number) => number == 5)
const constainsSix = numbers.some((number) => number == 6)
console.log("does array contain n")
console.log(doesContain(numbers, 5), "long form method, n = 5")
console.log(doesContain(numbers, 6), "long form method, n = 6")
console.log(constainsFive, "built-in method, n = 5")
console.log(constainsSix, "built-in method, n = 6")
console.log(numbers, "original array is unaltered")
/*
every - checks entire array to see if every element matches a condition
returns true/false
*/
console.log(" ")
console.log("-------------------------------------------------------")
console.log("every method:")
console.log(" ")
function greaterThan(arr, x) {
  for(let i = 0; i < arr.length; i++){
    if (arr[i] < x) return false
  }
  return true
}
const greaterThanZero = numbers.every((number) => number > 0)
const greaterThanThree = numbers.every((number) => number > 3)
console.log("all values in array are greater than n")
console.log(greaterThan(numbers, 0), "long form method, n = 0")
console.log(greaterThan(numbers, 3), "long form method, n = 3")
console.log(greaterThanZero, "built-in method, n = 0")
console.log(greaterThanThree, "built-in method, n = 3")
console.log(numbers, "original array is unaltered")