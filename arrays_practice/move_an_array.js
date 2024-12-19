// Write a JavaScript function to move an array element from 
// one position to another.

function move(array, from, to) {
  const updatedArray = [];
  let i = 0;

  while (i < array.length) {
    if (i - 1 === to) {
      updatedArray.push(array[from]);
    }

    if (i === from) {
      updatedArray.push();
      i++;
    }

    updatedArray.push(array[i]);
    i++;
  }

  return updatedArray;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], 0, 3));
console.log(move([10, 20, 30, 40, 50], 1, 2));