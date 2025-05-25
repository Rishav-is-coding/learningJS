class user {
    constructor(username) {
        this.username = username
    }
    logme(){
        console.log(`username : ${this.username}`)
    }
    //cant be accessed outside the user -> not by any child object
    static generateId() {
        return `123`
    }
}

let userone = new user('rishav')
userone.generateId() //cant be accessed

class Teacher extends user {
    constructor(username, email) {
        super(username) 
        this.email = email
    }
}

const iphone = new Teacher('iphone' , 'i@phone.com')
iphone.generateId() //cant be accessed 