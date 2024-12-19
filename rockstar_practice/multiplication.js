// multiplicatin (repeated addition) of two numbers by using recursion..

function mulOf2Numbers(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  return num1 + mulOf2Numbers(num1, num2 - 1);
}

function getMessage(num1, num2, expected, actual) {
  const message = "|num1:" + num1 + "\n  |num2:" + num2 + "\n  |expected:";

  return message + expected + "\n  |actual:" + actual;
}

function testMulOf2Numbers(num1, num2, expected) {
  const actual = mulOf2Numbers(num1, num2);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(num1, num2, expected, actual);

  console.log(status + content + "\n");
}

function testAll() {
  testMulOf2Numbers(0, 10, 0);
  testMulOf2Numbers(1, 10, 10);
  testMulOf2Numbers(10, 10, 100);
  testMulOf2Numbers(2, 2, 4);
  testMulOf2Numbers(2, 4, 8);
  testMulOf2Numbers(12, 12, 144);
}

testAll();