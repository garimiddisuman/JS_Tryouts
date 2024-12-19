// To find the most frequent item in an array.

function itemsCount(array, element) {
  let count = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      count++;
    }
  }

  return count;
}

function frequentlyItem(array) {
  let noOfItems = itemsCount(array, array[0]);
  let item = array[0];

  for (let index = 1; index < array.length; index++) {
    const temp = itemsCount(array, array[index]);
    if (noOfItems < temp) {
      noOfItems = temp;
      item = array[index];
    }
  }

  return item;
}

console.log(frequentlyItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
console.log(frequentlyItem([3]));