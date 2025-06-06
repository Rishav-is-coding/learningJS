class User{
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    //getters
    get password(){
        return `nahi dunga password`
    }
    //setter
    set password(value) {
        this._password = value
    }
}

const userOne = new User('hello@hello.com' , '123')
console.log(userOne.password)


/**************GET SET USING FUNCTIONS************** */
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);

/******************GET SET USING OBJECTS********************* */
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);