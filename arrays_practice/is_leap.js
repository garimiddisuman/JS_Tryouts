// To find leap years in an array...

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return isDivisible(year, 4) && !isDivisible(year, 100);
}

function findLeap(array) {
  const leapYearsList = [];

  for (let index = 0; index < array.length; index++) {
    if (isLeapYear(array[index])) {
      leapYearsList.push(array[index])
    }
  }

  return leapYearsList;
}

console.log(findLeap([1, 4, 100, 200, 400, 2000, 2024, 1900]));