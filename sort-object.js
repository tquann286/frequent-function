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
