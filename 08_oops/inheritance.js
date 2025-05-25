class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)  // same thing is happening behind the scene ki aap apna this mat use karo mere this me user name do -> in  .call  method
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`new course was added by ${this.username}`)
    }
}

let newTeacher = new Teacher('hello sir' , 'teacher@hello.com' , '123')
newTeacher.addCourse()