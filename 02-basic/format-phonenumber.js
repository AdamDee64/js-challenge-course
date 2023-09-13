// this function takes in an array of numbers and returns a string
// of the numbers in a phone number format 

function formatPhoneNumber(arr) {
    let output = "("
    for(let i = 0; i < arr.length; i++){
        output += arr[i].toString()
        if (i == 2) output += ") "
        if (i == 5) output += "-"
    }
    return output
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(formatPhoneNumber([8, 0, 0, 8, 4, 2, 7, 9, 2, 1]))
console.log(formatPhoneNumber([4, 1, 9, 2, 2, 6, 0, 2, 4, 7]))