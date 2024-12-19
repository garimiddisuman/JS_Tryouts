// factorial of a number using recursion

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  const status = actual === expected ? "✅" : "❌";

  console.log(status + " expected:" + expected + "  actual:" + actual);
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(5, 120);

}

testAll();