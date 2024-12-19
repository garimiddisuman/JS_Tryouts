// reverse of a number using recursion ..

/* 
 ---- To find number of digits using recursion ----

function digitsCount(num, count) {
  if (num > 10) {
    count += 1;
    return digitsCount((num - (num % 10)) / 10, count);
  }

  return count + 1;
}     
*/

function digitsCount(num) {
  const string = "" + num;

  return string.length;
}

function reverseOfNumber(n, noOfDigits) {
  if (n === 0) {
    return 0;
  }

  const MSB = (n % 10) * (10 ** noOfDigits);
  return MSB + reverseOfNumber((n - (n % 10)) / 10, noOfDigits - 1);
}

function testReverseNum(number, expected) {
  const noOfDigits = digitsCount(number);
  const actual = reverseOfNumber(number, noOfDigits - 1);
  const status = actual === expected ? "✅" : "❌";
  const content = "|input:" + number + "\n  |expected:" + expected;

  console.log(status + content + "\n  |actual:" + actual + "\n");
}

function testAll() {
  testReverseNum(1234, 4321);
  testReverseNum(1, 1);
  testReverseNum(121, 121);
  testReverseNum(123456, 654321);
  testReverseNum(0, 0);
  testReverseNum(12, 21);
  testReverseNum(12, 21);
}

testAll();