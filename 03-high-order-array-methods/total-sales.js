// a function that takes in an array with sales data and a tax rate
// returns the total cost after calculations

const electronics = [
  {item: 'Video game', cost: 59.99, quantity: 3},
  {item: 'Headset', cost: 29.49, quantity: 9},
  {item: 'Gamer chair', cost: 259.99, quantity: 1}
]
const eTax = 13

const produce = [
  {item: 'apple', cost: 0.5, quantity: 10},
  {item: 'cucumber', cost: 0.30, quantity: 20},
  {item: 'durian', cost: 0.6, quantity: 15}
]
const pTax = 8

function totalSales(cart, tax){
  let total = 0;
  for(let i = 0; i < cart.length; i++){
    total += cart[i].cost * cart[i].quantity
  }
  return total += Math.round(total * tax) / 100.0
}

console.log(totalSales(electronics, eTax))
console.log(totalSales(produce, pTax))