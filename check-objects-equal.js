// Check is object
function isObject(object) {
	return object != null && typeof object === 'object'
}

// Check are two object equal
function deepObjectEqual(object1, object2) {
  // Get all keys of ob1
	const keys1 = Object.keys(object1)

  // Get all keys of ob2
	const keys2 = Object.keys(object2)

  // Check if two keys length equal
	if (keys1.length !== keys2.length) {
		return false
	}

  // If two keys length are equal, then check value each key
	for (const key of keys1) {
    // Get value of key1
		const val1 = object1[key]

    // Get value of key2
		const val2 = object2[key]

    // Check if the values are object 
		const areObjects = isObject(val1) && isObject(val2)

		if (
      // areObjects && !deepObjectEqual(val1, val2) ==> if 2 values are obj then call deepObjectEqual function again to check two values
			(areObjects && !deepObjectEqual(val1, val2)) ||

      // If two values aren't obj then check if its value is equal
			(!areObjects && val1 !== val2)
		) {
			return false
		}
	}
  // If nothing wrong (two obj are equal) then return true
	return true
}

