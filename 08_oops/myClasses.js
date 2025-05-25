class User {
    //called when object is initialized from class
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    } 

    encryptPass(){
        return `abc${this.pass}abc`
    }
}

let userOne = new User('rishav', 'rishav@ex.com' , '123')

console.log(userOne.encryptPass())

//BEHIND THE SCENE

function User(username, email, pass) {
    this.username = username
    this.email = email
    this.pass = pass
}

User.prototype.encryptPass= function() {
    return `abc${this.pass}abc`
}

let user2 = new User('hello', 'hello@hello.com', '123')
console.log(user2.encryptPass())