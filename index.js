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
    ];

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

// Check Prime Number
function checkPrimeNumber(n) {

            var flag = true;
        
            // If n < 2 => not a prime number
            if (n < 2){
                flag = false;
            } else if (n == 2){
                flag = true;
            } else if (n % 2 == 0){
                flag = false;
            } else {
                // Loop from 3 to n - 1 with step: 2
                for (var i = 3; i < Math.sqrt(n); i+=2) {
                    if (n % i == 0){
                        flag = false;
                        break;
                    }
                }
            }
            return flag
        }
