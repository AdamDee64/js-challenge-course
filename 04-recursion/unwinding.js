const sumUpTo = (n) => {
    if (n === 1) {
        return 1
    }
    return n + sumUpTo(n - 1)
}

let result = sumUpTo(3)

console.log(result)

/*
call sumUpTo(3)                     add to call stack
recursively call 3 + sumUpTo(2)     add to call stack
recursively call 2 + sumUpTo(1)     add to call stack
                                    unwinding beigns
base case is reached, return 1      remove from call stack
return value is 2 + 1               remove from call stack
final return value is 3 + 3         remove from call stack
*/