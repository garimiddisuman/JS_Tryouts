// sum of range of numbers using recursion..(inclusive)..

function sumOfNumbersInRange(start, end) {
  if (start == end) {
    return end;
  }

  return start + sumOfNumbersInRange(start + 1, end);
}

function getMessage(start, end, expected, actual) {
  const message = "|start:" + start + "\n  |end:" + end;

  return message + "\n  |expected:" + expected + "\n  |actual:" + actual;
}

function testSumOfNumbers(start, end, expected) {
  const actual = sumOfNumbersInRange(start, end);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(start, end, expected, actual);

  console.log(status + content + "\n");
}

function testAll() {
  testSumOfNumbers(0, 10, 55);
}

testAll();