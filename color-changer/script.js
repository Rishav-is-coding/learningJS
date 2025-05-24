//generate random color 
const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color
}

// console.log(randomColor())

let changingColor
let num = 1

const startChangingColor = function(){
    if(!changingColor){
        changingColor = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
            console.log(num++)
        }, 1000);
    }
}

const stopChangingColor = function(){
    clearInterval(changingColor)
    changingColor = null
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)