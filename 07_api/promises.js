//promise is a object like(convert to json for object)
const promiseOne = new Promise(function(resolve/*if pass*/, reject/*if fail*/) {
    //Do an async task -> DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task 1 is complete')
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log('promise consumed')
})


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('async task 2')
        resolve()
    }, 1000);
}).then(function(){
    console.log('promise 2 consumed')
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: 'rishav', email: 'rishav@rishav.com'})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:'xyz', pass:'123'})
        }else{
            reject('ERROR 404')
        }
    }, 1000);
})

promiseFour.then(function(user){
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('either resolved or rejected')
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: 'javascript', pass: 'js'})
        }else{
            reject('E: javascript went wrong')
        }
    }, 1000);
})

//promises can be handeled from async await too -> catch is not handeled
async function consumePromise5() {
    try{
        const response = await promiseFive
        console.log(response) ;
    }catch(error){
        console.log(error);
    }
}

consumePromise5()


fetch('https://api.github.com/users/Rishav-is-coding')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

/*
    ***************FETCH**************
    fetch() -> starts the process of fetching a resource from the network -> return a promise

    network request error -> goes into resolve of promise

    fetch('url' , {}) -> can be used to send many things

    response = fetch() ---> web browser -> network request -> get a response OR not
                 |
                 |
                Data__
                1. on fulfilled   function inside 1 and 2 are responsible for data
                2. on Rejection


    any response generated on network request goes in On fulfilled(resolve) be it ERROR 404
*/