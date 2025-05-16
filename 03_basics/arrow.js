const user ={
    username : "rishav",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome`)  //this is used to refer current context
    } 
}

// user.welcomeMessage()

// console.log(this) //empty object -> no context in global  => if used in browser -> windows


function chai() {
    let username = "hdh"
    console.log(this.username) //undefined -> cant be accessed in functions
}
chai()

//arrow function

const chai = () => {
    let username = "rishav" 
    console.log(this) // a lot of things are present in function
}


// const addtwo = (num1 , num2) => {return num1 + num2}

//implicit return
const addtwo = (num1 , num2) => num1+num2
const addthree = (num1, num2, num3) => (num1 + num2 + num3)  //return statement is required in {} while its not required in ()

//to return an object -> it must be wrapped in paranthesis

