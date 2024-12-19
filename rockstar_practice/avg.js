// average of two numbers using recursion..

function min(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function _average(min, max) {
  if (min === max) {
    return min;
  }

  return _average(min + 0.5, max - 0.5);
}

function average(num1, num2) {
  const small = min(num1, num2);
  const big = max(num1, num2);
  
  return _average(small, big);
}

function testAvg(num1, num2, expected) {
  const actual = average(num1, num2);
  const status = actual === expected ? "✅" : "❌";

  console.log(status + " expected:" + expected + "  actual:" + actual);
}

function testAll() {
  testAvg(0, 1, 0.5);
  testAvg(3, 1, 2);
  testAvg(2, 2, 2);
  testAvg(3, 6, 4.5);
  testAvg(5, 120, 62.5);
}

testAll();