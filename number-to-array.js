const numToArr = (number) => {
  return Array(number).fill().map((_,i) => (
    <p>⭐</p>
  ))
}

console.log(numToArr(5))

// Output: ⭐⭐⭐⭐⭐