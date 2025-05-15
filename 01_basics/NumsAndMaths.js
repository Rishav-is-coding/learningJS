let newnumber = new Number(3)  //syntax to add in browser console to know the prototypes

console.log(newnumber.toFixed(2)) // 3.00


newnumber = 324.794739
console.log(newnumber.toPrecision(5)) //324.79 => returns a string
console.log(newnumber.toPrecision(1)) //3e+2 


let money = 1000000000
console.log(money.toLocaleString('en-IN')) //converted to indian number system -> 1,00,00,00,000





/**********************MATH********************* */

const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max-min+1)) + min)  //gives a random integer between min and max (included) 

//math.random => gives a random value from 0 and 1
