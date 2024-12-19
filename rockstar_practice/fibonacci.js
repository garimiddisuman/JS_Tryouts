//  To find nth term of a fibanacci series...

function nthFibonacci(current, next, nth) {
  if (nth === 1) {
    return current;
  }

  return nthFibonacci(next, current + next, nth - 1);
}

function getMessage(nth, expected, actual) {
  const message = nth + " term of fibannacci should be " + expected;

  return message + " and is " + actual;
}

function testNthFibonacci(nth, expected) {
  const actual = nthFibonacci(0, 1, nth);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(nth, expected, actual);

  console.log(status + " " + content);
}

function testCases() {
  testNthFibonacci(1, 0);
  testNthFibonacci(4, 2);
  testNthFibonacci(6, 5);
  testNthFibonacci(8, 13);
}

testCases();