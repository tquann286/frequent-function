// a function which generate random hexa colors
const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
      index = Math.floor(Math.random() * str.length)
      hexa += str[index]
    }
    return hexa
}

// Get real time updated
function showTime(){
    let date = new Date()
    let dateNow = date.getDate()
    let year = date.getUTCFullYear()
    let h = date.getHours() 
    let m = date.getMinutes() 
    let s = date.getSeconds() 
    let session = "AM"
    const months = [
        "January", "February", 
        "March", "April", "May", 
        "June", "July", "August",
        "September", "October", 
        "November", "December"
    ]

    if(h == 0){
        h = 12
    }
    
    if(h > 12){
        h = h - 12
        session = "PM"
    }
    
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
    
    let time = `${months[date.getMonth()]} ${dateNow}, ${year} ${h}:${m}:${s} ${session}`
    document.getElementById("DigitalCLOCK").innerHTML = time
}
document.querySelector('.clock').style.display = 'inline-block' // Remember to create a div with class 'clock'
setInterval(showTime, 1000)

// Check is prime number
function testPrime(n) {
    if ( n === 1 || n === 0 ) {
        return false
    } else if(n === 2)  return true 
    else {
        for(let x = 2; x < n; x++) {
            if(n % x === 0) {
                return false
            }   
        }
        return true  
    }
}

// Sort array includes objects by object's value : sort from small to large, if want the opposite result, just replace a with b and b with a.
// Full function
function compare( a, b ) {
    if ( a.key < b.key ){
      return -1
    }
    if ( a.key > b.key ){
      return 1
    }
    return 0
}
objs.sort(compare)

// Or inline (c/o Marco Demaio):
objs.sort((a,b) => (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0))

// Console.log
function logger(log, type = 'log') {
    console[type](log)
}

// Detect click inside/outside of element with single event handler
const myElementToCheckIfClicksAreInsideOf = document.querySelector('#my-element')
// Listen for click events on body
document.body.addEventListener('click', function (event) {
    if (myElementToCheckIfClicksAreInsideOf.contains(event.target)) {
        console.log('clicked inside')
    } else {
        console.log('clicked outside')
    }
})