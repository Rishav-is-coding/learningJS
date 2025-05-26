const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor)

/*
{
  value: 3.141592653589793,
  writable: false,  //cant be overwritten
  enumerable: false,
  configurable: false
}
*/


const myNewObject = {
    name : 'iphone13',
    price: 100000,
    available: true
}

console.log(Object.getOwnPropertyDescriptor(myNewObject, 'name'))

// myNewObject.name = 'iphone14'

Object.defineProperty(myNewObject, 'name', {
    writable : false,
    enumerable : false
})

myNewObject.name = 'iphone14' //changed the name but still not changed because writable property has been disabled 


console.log(myNewObject.name) 


for (const [key, value] of Object.entries(myNewObject)) {
    if(typeof value !== 'function'){
        console.log(`${key} , ${value}`)
    }
} //only gives price and avaiable properties as name property has been set false for enumarable