const power = function (number) {
  let i = 0;

  return function () {
    i++;
    return Math.pow(number, i);
  }
}

const exponents = function (base, limit) {
  return Array(limit).fill(0).map(power(base));
}

console.log(exponents(2, 10));