// a function that simulates rolling two 6-sided dice
// the function takes in one argument which is the number of times to roll the dice
// the function returns an array of objects, each object reperesents each dice roll
// and contains the value of the two dice rolled and the sum.
// a roll of 7 or 11 result in a win
// a roll of 12, 2, or 3 result in a lose
// any other roll results in a play again

function rollDice(howManyPlays) {
    let result = []
    for(let i = 0; i < howManyPlays; i++){
        let roll = {
            dice1: 0,
            dice2: 0,
            sum: 0,
            result: ""
        }   
        roll.dice1 = Math.floor(Math.random() * 6) + 1
        roll.dice2 = Math.floor(Math.random() * 6) + 1
        roll.sum = roll.dice1 + roll.dice2
        if(roll.sum == 12 || roll.sum == 2 || roll.sum == 3) roll.result = "lose"
        else if(roll.sum == 7 || roll.sum == 11) roll.result = "win"
        else roll.result = "play again"
        result.push(roll)
    }
    return result
}

console.log(rollDice(100))