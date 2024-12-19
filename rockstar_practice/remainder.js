// finding remainder using recursion..

function _remainder(num1, num2) {
  if (num1 < num2) {
    return num1;
  }

  return _remainder(num1 - num2, num2);
}

function remainder(num1, num2) {
  if (num2 === 0) {
    return Infinity;
  }

  return _remainder(num1, num2);
}

function testRemiander(num1, num2, expected) {
  const actual = remainder(num1, num2);
  const status = actual === expected ? "✅" : "❌";
  const content = "\n  remainder : " + actual;

  console.log(status,num1, "/" ,num2,content,"\n");
}

function testAll() {
  testRemiander(5, 3, 2);
  testRemiander(6, 3, 0);
  testRemiander(5, 10, 5);
  testRemiander(5, 0, Infinity);
  testRemiander(0, 5, 0);
}

testAll();