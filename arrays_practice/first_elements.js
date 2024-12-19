// To get the last element of an array.
// Passing  the parameter 'n' will return the last 'n' elements of the array.

function firstElements(array, n) {
  const firstElementsArray = [];

  for (let index = 0; index < Math.min(array.length, n); index++) {
    firstElementsArray.push(array[index]);
  }

  return firstElementsArray;
}

function testAll() {
  console.log(firstElements([7, 9, 0, -2], 2));
  console.log(firstElements([], 3));
  console.log(firstElements([7, 9, 0, -2], 3));
  console.log(firstElements([7, 9, 0, -2], 6));
  console.log(firstElements([7, 9, 0, -2], -3));
}

testAll();