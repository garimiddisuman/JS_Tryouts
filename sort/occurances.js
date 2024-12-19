const getCount = function (array, index, lastIndex) {
  const count = [];

  while (lastIndex < array.length) {
    index = array.indexOf(array[lastIndex]);
    lastIndex = array.lastIndexOf(array[lastIndex]);
    lastIndex++;
    count.push([array[index], lastIndex - index]);
  }

  return count;
}

const occurances = function (string) {
  const array = string.split("");
  const sortedArray = array.sort();
  return getCount(sortedArray, 0, 0);
};

console.table(occurances('zzzzz aa bb cc d x zz h z hh i x zz'));