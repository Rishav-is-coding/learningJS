let a = 10
const b = 20
var c = 30


if(true) {  //{} this is scope exept object declaration
    let a = 100
    console.log(a)
}

console.log(a)

//closure -> child functions can access the variables of parent functions


console.log(addone(5))

function addone(num) {   //i can access this function even before its declaration
    return num+1
}

//addtwo(5)   ->  gives error
const addtwo = function(num) {   //also called as expression -> cant be accessed before declaration
    return num+2
}

console.log(addtwo(5))