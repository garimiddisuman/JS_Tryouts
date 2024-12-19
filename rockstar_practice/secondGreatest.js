function secondGreatest(a, b, c) {
  if (a < b) {
    return secondGreatest(b, a, c);
  }
  if (b < c) {
    return secondGreatest(a, c, b);
  }

  return b;
}

function testSecondGreatest(a, b, c, expected) {
  const actual = secondGreatest(a, b, c);
  const status = actual === expected ? "✅" : "❌";
  const secondBig = "\n   secondGreatest: " + actual + "\n";

  console.log(status, a, b, c, secondBig);
}

function testAll() {
  testSecondGreatest(2, 3, 1, 2);
  testSecondGreatest(3, 2, 1, 2);
  testSecondGreatest(4, 5, 6, 5);
  testSecondGreatest(4, 4, 4, 4);
  testSecondGreatest(1, 4, 3, 3);
  testSecondGreatest(20, 50, 70, 50);
}

testAll();