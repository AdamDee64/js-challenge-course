function helloWorld() {
  return 'Hello worlz'
}

let start = Date.now()
console.log(helloWorld())

let end = Date.now() - start
console.log("finished in ", end / 1000, "seconds")
