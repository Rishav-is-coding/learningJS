function sayMyName(){
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("V")
}


//rest operator -> return all the values passed as argument in an array
function cartprice(...num){
    return num
}

console.log(cartprice(200, 500, 7840, 484))
