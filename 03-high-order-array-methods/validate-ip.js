// a function that validates an ip address string

let ip1 = "127.O.O.21"
let ip2 = "255.11.15.632"
let ip3 = "112.99.92.34"
let ip4 = "255.255.255"
let ip5 = "98.001.099.255"

function validateIP(ip) {
  let validate = ip.split(".")
  if (validate.length != 4) return false
  for (let i = 0; i < 4; i++){
    if(validate[i].search(/[^0-9]/) >= 0) return false
    if(validate[i] * 1 < 0 || validate[i] * 1 > 255) return false
    if(validate[i].length > 2 && validate[i] * 1 < 100) return false
  }
  return true
}

console.log(validateIP(ip1))
console.log(validateIP(ip2))
console.log(validateIP(ip3))
console.log(validateIP(ip4))
console.log(validateIP(ip5))