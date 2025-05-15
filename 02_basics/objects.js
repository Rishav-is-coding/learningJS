//object literals


const mySym = Symbol("key1")

console.log(typeof mySym)

const jsUser = {
    name : "Rishav",
    "full name" : "Rishav Raj",
    // mySym : "myKey1",  //not used as symbol instead it is used as string
    [mySym] : "myKey1",  //only way to use symbol as key in object
    age : 22, 
    email: "rishav@google.com",
    isLoggedIn : false
}

//access the object
console.log(jsUser.name)
console.log(jsUser["name"]) //key "name" is passed as string so to access it we must pass as string in square brackets
console.log(jsUser["full name"]) //this type of key can only be accessed by square brackets

console.log( jsUser[mySym])


// Object.freeze(jsUser) //froze the jsUser object.. no changes after this will be counted
jsUser.name = "gautam"

console.log(jsUser)

//function in object
jsUser.greeting = function(){
    console.log("Hello js User")
}

jsUser.greeting2 = function(){
    console.log(`hello js User, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())