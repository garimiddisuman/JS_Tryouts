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

function primesInRange(primeCandidate, endOfRange, string = "") {
  if (primeCandidate > endOfRange) {
    return string;
  }

  if (isPrime(primeCandidate)) {
    string += primeCandidate + "\n";
  }

  return primesInRange(primeCandidate + 1, endOfRange, string);
}

console.log(primesInRange(0,100));