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

export default testPrime