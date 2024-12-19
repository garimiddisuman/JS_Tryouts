const array = [1, 3, 9];
const key = 8;

const distance = function (array, num) {
  if (Math.abs(num - array[0]) < Math.abs(num - array[1])) {
    return [key, num];
  }

  return array;
}

const getKey = function (array, key) {
  const lock = array.reduce(distance, [key, Infinity]);
  return lock[1];
}

console.log(getKey(array, key));