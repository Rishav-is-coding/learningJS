//if-else statement

/*
    if(condition) {
        execution
    }else if(){
        execution
    }

*/ 



//for loop -> same as cpp

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         //console.log("5 is best number");
//     }
//     //console.log(element);
// }


//while loop

/*
    while(condition) {
        console.log("blah blah")
        terminating condition (like i++)

    }
*/

//do while loop

/*
    do{
        execution
    }while(condition)
*/


// ARRAY SPECIFIC LOOP  


//for of loop

/*
    const arr = [1, 2, 3, 4, 5]
    for (const num of arr){
        console.log(num)
    }
*/

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//map only hold unique value
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':' , value);
}


//for in loop -> can't iterate in objects using for of loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {   //-> provides key value = 0, 1, 2, 3, 4...... 
    //console.log(programming[key]);
}


// const map1 = new Map()   -> not iteratable using for in loop
// map1.set('IN', "India")
// map1.set('USA', "United States of America")
// map1.set('Fr', "France")
// map1.set('IN', "India")

// for (const [key] in map1) {
//     console.log(key);
// }
