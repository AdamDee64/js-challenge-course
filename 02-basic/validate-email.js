// this function takes in a string and tests whether it is a valid email or not
// returns true or false

function validateEMail(str){
    if (str.match(/(\w+\.)*\w+@(\w+\.)+\w{2,}/)) return true
    return false
}

console.log(validateEMail("gs3di@ifin4.com"))           // true
console.log(validateEMail("gdffv@ifin4"))               // false
console.log(validateEMail("n.n.n"))                     // false
console.log(validateEMail("@domain.com"))               // false
console.log(validateEMail("sakdjas@dsfnwe.cica"))       // true
console.log(validateEMail("sfna__c.c323@fskfs.co.uk"))  // true


