// sum of prime numbers between range.... (inclusive)

function _isPrime(candidate, divisor) {
  if (divisor === candidate) {
    return true;
  }

  return candidate % divisor === 0 ? false : _isPrime(candidate, divisor + 1);
}

function isPrime(candidate) {
  if (candidate < 2) {
    return false;
  }

  return _isPrime(candidate, 2);
}

function primesInRange(primeCandidate, endOfRange) {
  if (primeCandidate > endOfRange) {
    return 0;
  }

  if (isPrime(primeCandidate)) {
    return primeCandidate + primesInRange(primeCandidate + 1, endOfRange);
  }

  return primesInRange(primeCandidate + 1, endOfRange);
}

function testSumOfPrimes(start, end, expected) {
  const actual = primesInRange(start, end);
  const status = actual === expected ? "✅" : "❌";
  const message = "|start:" + start + "\n  |end:" + end + "\n  |expected:";

  console.log(status + message + expected + "\n  |actual:" + actual + "\n");
}

function testCases() {
  testSumOfPrimes(0, 5, 10);
  testSumOfPrimes(10, 20, 60);
  testSumOfPrimes(20, 50, 251);
  testSumOfPrimes(0, 10, 17);
  testSumOfPrimes(0, 100, 1060);
  testSumOfPrimes(0, 1000, 76127);
}

testCases();