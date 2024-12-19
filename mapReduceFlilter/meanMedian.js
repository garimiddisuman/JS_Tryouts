const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4, 5, 6];
const c = [2, 4, 7, 8, 10, 12];

const add = function (x, y) {
  return x + y;
};

const mean = function (a) {
  const sum = a.reduce(add, 0);

  return sum / a.length;
};

const middleNumbers = function (element, index, array) {
  if (index === Math.floor((array.length - 1) / 2)) {
    return true;
  }

  return index === Math.ceil((array.length - 1) / 2);
};

const median = function (a) {
  const middle = a.filter(middleNumbers);
  return (middle.reduce(add, 0)) / middle.length;
};

const meanAndMedian = function (a) {
  const array = [];
  array.push(mean(a));
  array.push(median(a));
  return array;
};

console.log(meanAndMedian(a));
console.log(meanAndMedian(b));
console.log(meanAndMedian(c));