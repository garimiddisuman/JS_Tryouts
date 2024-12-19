// dicimal to binary using recursion ..

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function decimalToBinary(number) {
  if (number === 0) {
    return "";
  }

  const slice = isDivisible(number, 2) ? 0 : 1;
  return "" + decimalToBinary((number - slice) / 2) + slice;
}

function testDecimalToBinary(number, expected) {
  const actual = + decimalToBinary(number);
  const status = actual === expected ? "✅" : "❌";
  const content = "number: " + number + "\n   decimal:" + actual;

  console.log(status, content + "\n");
}

function testAll() {
  testDecimalToBinary(1, 1);
  testDecimalToBinary(2, 10);
  testDecimalToBinary(10, 1010);
  testDecimalToBinary(3, 11);
  testDecimalToBinary(7, 111);
  testDecimalToBinary(4, 100);
  testDecimalToBinary(128, 10000000);
  testDecimalToBinary(12, 1100);
}

testAll();