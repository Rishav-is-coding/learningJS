function setUserName (username){
    //blah blah
    this.username = username
}

function createUser(username, email, pass){
    /* setUserName(username) */ //getting called but after getting called it is immediately being deleted from call stack hence -> Yhn tak aa hi nhi paa rha username
    //in this method only refrence is given instead of actually calling the function(only in calling of function inside function)

    //for actually calling the function '.call' is used
    setUserName.call(this, username) // (this, username) -> telling setUserName ki aap apna this mat use karo instead aap isme do apna username

    this.email = email
    this.pass = pass 
}

let userOne = new createUser('rishav', 'rishav@ex.com', '123')
console.log(userOne)