const data = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75];

const predicator = function (x) {
  return x < 20 || x >= 50;
};

const modifiedNumbers = function (x) {
  return x % 5 === 0 ? x * x : x - 3;
};

const isDivisibleByTen = function (x) {
  return x % 10 === 0;
};

const isDivisibleByFiveOrLessThan20 = function (x) {
  return x % 5 === 0 || x < 20;
};

const isDivisibleByTenAndGreaterOrEqualTo30 = function (x) {
  return isDivisibleByTen(x) && x >= 30;
};

const add = function (x, y) {
  return x + y;
};

const getAverageOfMultiplesOfTens = function (data) {
  const mulOfTens = data.filter(isDivisibleByTenAndGreaterOrEqualTo30);
  const sumOfMulOfTens = mulOfTens.reduce(add, 0);

  return sumOfMulOfTens / mulOfTens.length;
}

const sumOfFilteredNumbers = data.filter(predicator);
const squaredOrSubtracted = data.map(modifiedNumbers);
const largestDivisibleByTen = Math.max(...(data.filter(isDivisibleByTen)));
const conditionMet = data.every(isDivisibleByFiveOrLessThan20);
const averageOfMultiplesOfTens = getAverageOfMultiplesOfTens(data);

console.log(sumOfFilteredNumbers);
console.log(squaredOrSubtracted);
console.log(largestDivisibleByTen);
console.log(conditionMet);
console.log(averageOfMultiplesOfTens);