// console.log(2>1)
// console.log(2>=1)
// <=
// ==
// <


// comparisions only happen in same data types

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

// in case of comparision js convert in number as null = 0; while in equality check it doesnt happen

console.log("2" == 2) //true  -> conversion happens
console.log("2" === 2) //false -> strict check(also check datatype)