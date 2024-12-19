// To get the last element of an array.
// Passing the parameter 'n' will return the last 'n' elements of the array.

function lastElements(array, n) {
  const lastElementsArray = [];

  for (let index = 1; index <= Math.min(array.length, n); index++) {
    lastElementsArray.unshift(array[array.length - index]);
  }

  return lastElementsArray;
}

function testAll() {
  console.log(lastElements([7, 9, 0, -2], 2));    // [0, -2]
  console.log(lastElements([7, 9, 0, -2], 1));    // [-2]
  console.log(lastElements([7, 9, 0, -2], 6));    // [7, 9, 0, -2]
}

testAll();