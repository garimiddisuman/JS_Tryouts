// hcf of two numbers..

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function _hcf(num1, num2) {
  if (isDivisible(num1, num2)) {
    return num2;
  }

  return _hcf(num2, num1 % num2);
}

function hcf(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  return _hcf(num1, num2);
}

function testHcf(num1, num2, expected) {
  const actual = hcf(num1, num2);
  const status = actual === expected ? "✅" : "❌";
  const content = "expected:" + expected + "  actual:" + actual;

  console.log(status, num1, num2, content);
}

function testAll() {
  testHcf(2, 4, 2);
  testHcf(18, 24, 6);
  testHcf(0, 4, 0);
  testHcf(4, 0, 0);
  testHcf(12, 6, 6);
  testHcf(24, 7, 1);
  testHcf(3, 17, 1);
}

testAll();