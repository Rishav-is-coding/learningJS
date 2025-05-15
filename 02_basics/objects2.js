//singleton -> with the help of constructor
const tinderuser = new Object()

const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//nested Object
const user = {
    email : "user@google.com",
    fullname : {
        userfullname :{
            firstname: "rishav",
            lastname: "raj"
        },
        petname : "rishu"
    }
}

console.log(user)


//combining objects

const obj1 = {1: "a" , 2:"b" }
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1, obj2}  => same problem as arrays --> object inside object

// const obj3 = Object.assign({} , obj1, obj2) => similar to concating the array

const obj3 = {...obj1, ...obj2} //spread operator -> widely used

console.log(obj3)


console.log(Object.keys(user)) //return an array containing all the keys of user object
//similarly for values



