const range = function () {
  let i = 0;

  return function () {
    i++;
    return i;
  }
}

const star = function (times) {
  return '*'.repeat(times);
}

const space = function (times) {
  return ' '.repeat(times);
}

const fillWithSpaceAndStar = function (num) {
  return space(num) + star(num);
}

const triangle = function (num) {
  return Array(num).fill(0).map(range()).map(fillWithSpaceAndStar);
}

console.log(triangle(3));