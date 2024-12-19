// print even numbers in between range ..(inclusive).

function isEven(evenCandidate) {
  return evenCandidate <= 1 ? evenCandidate === 0 : isEven(evenCandidate - 2);
}

function printEvenNumbersInRange(start, end) {
  if (isEven(start)) {
    console.log(start);
  }

  if (start < end) {
    return printEvenNumbersInRange(start + 1, end);
  }
}

function testCases() {
  printEvenNumbersInRange(0, 10);
}

testCases();