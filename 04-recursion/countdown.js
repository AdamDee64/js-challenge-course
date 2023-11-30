// recursion is when a function calls itself over and over until a certain condition is met


const countDown = (num) => {

    if(num <= 0) { // base case, the condition that will end the recursion cycle
        console.log("All done!")
        return
    }

    console.log(num)
    countDown(num - 1)
}


countDown(10)