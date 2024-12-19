function isArray(array) {
  return array.length >= 0;
}

function flatArray(array) {
  const flattedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!isArray(array[i])) {
      flattedArray.push(array[i]);
    }

    for (let j = 0; j < array[i].length; j++) {
      flattedArray.push(array[i][j]);
    }
  }

  return flattedArray;
}

console.log(flatArray([1, [2, 3], 4]));