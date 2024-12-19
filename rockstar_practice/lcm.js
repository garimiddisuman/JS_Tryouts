// lcm of two numbears using recursion...

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function _lcm(num1, num2, count) {
  if (isDivisible(num1, num2)) {
    return num1;
  }

  return _lcm(num1 + count, num2, count);
}

function lcm(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  return _lcm(num1, num2, num1);
}

console.log(lcm(8, 12));