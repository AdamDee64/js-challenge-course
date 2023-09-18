// password validator
// password must:
// be 8 characters long or more
// contain at least 1 upper case character
// contain at least 1 lower case character
// contain at least 1 number

const pass1 = "abcd1234"
const pass2 = "Aa123"
const pass3 = "GOD_MODE99"
const pass4 = "p0o9i8U7"
const pass5 = "LEET_as_FUCK"

// with array methods
function validatePassword(pass) {
  if(pass.length < 8) return false
  validate = pass.split("")
  if(!validate.some(x => (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90))) return false
  if(!validate.some(x => (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122))) return false
  if(!validate.some(x => (x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57))) return false
  return true
}

// without array methods
function passwordValidate(pass) {
  if(pass.length < 8) return false
  let upperCase = false;
  let lowerCase = false;
  let digit = false;
  for (let i = 0; i < pass.length; i++){
    if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) upperCase = true
    if(pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) lowerCase = true
    if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) digit = true
  }

  return (upperCase && lowerCase && digit)

}

console.log(validatePassword(pass1))
console.log(validatePassword(pass2))
console.log(validatePassword(pass3))
console.log(validatePassword(pass4))
console.log(validatePassword(pass5))
console.log("------------")
console.log(validatePassword(pass1))
console.log(validatePassword(pass2))
console.log(validatePassword(pass3))
console.log(validatePassword(pass4))
console.log(validatePassword(pass5))