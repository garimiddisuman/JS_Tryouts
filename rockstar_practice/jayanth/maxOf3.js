function max(a, b, c) {
  if (a < b) {
    return max(b, a, c);
  }
  
  if (b < c) {
    return max(a, c, b);
  }

  return b;
}

function testSecondGreatest(a, b, c, expected) {
  const actual = max(a, b, c);
  const status = actual === expected ? "✅" : "❌";
  const secondBig = "\n   secondGreatest: " + actual + "\n";

  console.log(status, a, b, c, secondBig);
}

function testAll() {
  testSecondGreatest(2, 3, 1, 3);
  testSecondGreatest(3, 2, 1, 3);
  testSecondGreatest(4, 5, 6, 6);
  testSecondGreatest(4, 4, 4, 4);
  testSecondGreatest(1, 4, 3, 4);
  testSecondGreatest(20, 50, 70, 70);
}

testAll();