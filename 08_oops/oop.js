//object literal -> any object
const user = {   
    username : 'rishav',
    loginCount : 4,
    signedIn : true,

    getUserDetails : function(){
        //console.log('got user details')
        console.log(`username: ${this.username}`) //this is used to represent the 'current context'
    }
}

 console.log(user.username)
 console.log(user.getUserDetails())
 console.log(this) //here it will give empty object {} but in browser it will give window

//  CONSTRUCTOR FUNCTION

// "new" -> used to create multiple instances from 1 object literal

function User(username, loginCount, signedIn){
    this.username = username
    this.loginCount =  loginCount
    this.signedIn = signedIn

    return this
}

const userOne = new User('rishav raj', 12, true)
const userTwo = new User('learningJS', 2, true)

console.log(userOne)
console.log(userTwo)



// when 'new' is used -> first new object is created(instance)
// constructor function is called due to new keyword -> constructor property is a refrence to itself
// data is added due to 'this'