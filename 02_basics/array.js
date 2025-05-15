const myArray = [0, 1, 2, 3, 4, 5, "rishav"]  //different type of elements are allowed in js

const myHeros = ["ironman" , "captainAmerica" , "spiderman"]

const myArray2 = new Array(1,2,3,4) //put in console of browser to know prototypes

//push -> same as push_back in cpp
myArray.pop()
myArray.push(6)
// console.log(myArray)

myArray.unshift(9)  //add in front
console.log(myArray) // 9 , 0, 1, 2, 3, 4, 5, 6
myArray.shift()  //remove from front
console.log(myArray) //0, 1, 2, 3, 4, 5, 6


console.log(myArray.includes(1))  //true or false
console.log(myArray.indexof(1))

const newArr = myArray.join() //merge the elements of array and return in form of string  => 0,1,2,3,4,5,6

// slice and splice
console.log(myArray.slice(1, 3)) //range is not included -> [1, 2]

console.log(myArray.splice(1,3)) //range is included -> [1, 2, 3] also original array is manipulated in this case i.e. elements other than range are only present in original array

/**********************OTHER OPERATIONS********************** */

const marvel_heroes = ["thor" ,"ironman"]
const dc_heroes = ["superman" , "batman"]

marvel_heroes.push(dc_heroes) //treat dc_heroes array as third element i.e. ["thor" ,"ironman", ["superman" , "batman"]]

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes) //[thor, ironman, superman, batman]

//spread
const all_new_heroes = [...marvel_heroes, ...dc_heroes] //same result as concat -> this is more prefered as multiple arrays can be handled


const newArray = [1, 2, 3, [3, 4, [5, 6, [9, 6]]]]
const flatArray = newArr.flat(Infinity)
console.log(flatArray) //[1, 2, 3, 3, 4, 5, 6, 9, 6]
