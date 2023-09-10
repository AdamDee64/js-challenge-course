// calculate two values with a given operator


function calculate(a, b, s) {
  switch (s) {
    case '+':
      return a + b
      break
    case '-':
      return a - b
      break
    case '/':
      return a / b
      break
    case '*':
      return a * b
      break
    case '%':
      return a % b
      break
    default:
      return 'invalid input'
  }
}

console.log(calculate(2, 3, '+')) // 5
console.log(calculate(10, 5, '-')) // 5
console.log(calculate(9, 3, '/')) // 3
console.log(calculate(2, 4, '*')) // 8
console.log(calculate(10, 3, '%')) // 1
console.log(calculate(6, 7, 'x')) // invalid
