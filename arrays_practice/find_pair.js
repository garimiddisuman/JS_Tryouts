// Find a pair of elements from an specified array whose sum equals 
// a specific target number.

function findPair(array, target) {
  const pair = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        pair.push(i, j);
      }
    }
  }

  return pair;
}

console.log(findPair([20, 10, 40, 50, 60, 70], 50));
console.log(findPair([20], 50));