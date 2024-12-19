const numbers = [10, 15, 20, 25, 30, 35];

const isGreaterThanAreEqualTo18 = function (num) {
  return num >= 18;
};

const add = function (x, y) {
  return x + y;
};

const inc = function (x) {
  return x + 1;
};

const isGraterThan50 = function (num) {
  return num > 50;
};

const agesAbove18 = numbers.filter(isGreaterThanAreEqualTo18);
const incOneEachAge = numbers.map(inc);
const sumOfAges = numbers.reduce(add, 0);
const areGreaterThanAreEqualTo18 = numbers.every(isGreaterThanAreEqualTo18);
const isAnyOneOlderThan50 = numbers.some(isGraterThan50);

console.log(agesAbove18);
console.log(incOneEachAge);
console.log(sumOfAges);
console.log(areGreaterThanAreEqualTo18);
console.log(isAnyOneOlderThan50);