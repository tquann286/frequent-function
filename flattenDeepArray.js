// Use recursion
const flatten = (arr) => arr.reduce((acc, current) => acc.concat(Array.isArray(current) ? flatten(current) : current), [])
