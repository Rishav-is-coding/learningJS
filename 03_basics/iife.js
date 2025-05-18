//Immediately Invoked Function Expressions(IIFE)

//there is problem of pollution from global scope to remove that pollution from certain function -> iife is used

(function chai() { //named iife
    console.log("DB Connected")
})(); // ; must be used to write two iife 

((name) => {
    console.log(`DB connected ${name}`)
})('rishav')



/* ******************************HOW DOES JS EXECUTE THE CODE ******************************* */

/*
JS execution context

1. Global execution context (GEC) -> for nodejs(empty object) -> for browser(window object)  => stored in this
2. function execution context
3. eval execution context (property of global object)


JS code runs in 2 phases
1. memory creation phase
2. execution phase


example code ->

        let val1 = 10
        let val2 = 5
        function addtwono(num1 , num2) {
            let total = num1 + num2
            return total
        }
        let result1 = addtwono(val1, val2)
        let result2 = addtwono(10, 2)

execution->
1. global execution phase -> this
2. memory phase (first cycle)
    val1 -> undifined
    val2 -> undifined
    addtwono -> definition
    result1 -> undifined
    result2 -> undifined
3. execution phase
    val1 = 10
    val2 = 5
    addtwono -> create a new executional context/thread -> 
        memory phase-
            val1 -> undifined
            val2 -> undifined
            total -> undifined
        execution phase
            num1 = 10
            num2 = 5
            total = 15 (returned to global execution context)  => deleted after completion of function
            
            


CALL STACK => LIFO concept



*/