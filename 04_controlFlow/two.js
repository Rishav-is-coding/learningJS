// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

//for each loop does'nt return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
//filter operations
const nums = myNums.filter( (num)=> (num>4))
console.log(nums)
const nums2 = myNums.filter( (num) => {
    return num>4   //have to use "return" if scope is introduced
}) 
console.log(nums2)
*/


/*
//using for each loop
const newnums = []
myNums.forEach(element => {
    if(element>4) {
        newnums.push(element)
    }
});

console.log(newnums)
*/


/*
//map -> return value (difference from for each method)

const newnums = myNums.map( (item) => {
    return item + 10
})

const newnums = myNums.map((item) => item*10).map((item) => item+20) //chaining
console.log(newnums)
*/


// ***************** REDUCE METHOD  *******************
/*
const num = [1, 2, 3]

// const total = num.reduce( function(acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval
// }, 0)

const total = num.reduce ((acc, currval) => (acc+currval), 0)
console.log(total)
*/


