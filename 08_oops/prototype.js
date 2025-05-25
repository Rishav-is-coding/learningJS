//create a property trueLength which gives true length of the string

// let string1 = 'hello    '
// console.log(string1.trueLength())


let myHeroes = ['thor', 'spiderman']

let heropower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpidyPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

// heropower.rishav() //can we do it??

Object.prototype.rishav = function(){
    console.log('Rishav is there in all objects')
}

//we have created a prototype 'rishav' in object -> In JS everything goes through object hence everything can access '.rishav'  due to prototyple inheritence

//BUT if we create 'rishav' in array then it will not be accessible to everything like string n all, In case of OBJECT it is there because EVERYTHING IS OBJECT IN JAVASCRIPT

const user ={
    name: 'chai',
    email : 'chai@google.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport ={
    help : 'js assignment',
    fulltime : true,
    //
    // __proto__ : TeachingSupport
}

// Teacher.__proto__ = user

//console.log(Teacher.name)  //'chai' as output

//modern syntax
Object.setPrototypeOf(Teacher, user)

console.log(Teacher.name)


/***************ORIGINAL PROBLEM************ */

let string1 = 'raftar    '

String.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`)
}

console.log(string1.trueLength())
console.log('hello    '.trueLength())