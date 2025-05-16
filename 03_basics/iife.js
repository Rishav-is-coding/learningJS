//Immediately Invoked Function Expressions(IIFE)

//there is problem of pollution from global scope to remove that pollution from certain function -> iife is used

(function chai() { //named iife
    console.log("DB Connected")
})(); // ; must be used to write two iife 

((name) => {
    console.log(`DB connected ${name}`)
})('rishav')

