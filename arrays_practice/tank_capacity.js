function noOfContinueZeros(array, index) {
  let zerosCount = 1;

  while (array[index] === 0 && array[index + 1] === 0) {
    index++;
    zerosCount++;
  }

  return array[index + 1] === undefined ? 0 : zerosCount;
}

function findUints(tanks, zerosCount, units, index) {
  if (index >= tanks.length) {
    return units;
  }

  if (tanks[index] === 0) {
    zerosCount = noOfContinueZeros(tanks, index);
    units += zerosCount * Math.min(tanks[index + zerosCount], tanks[index - 1]);
  }

  index += zerosCount > 1 ? zerosCount : 1;
  return findUints(tanks, 0, units, index);
}

function measureTankCapacity(tanks) {
  const index = tanks[0] === 0 ? 1 : 0;

  return findUints(tanks, 0, 0, index);
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(tanks, expected, actual) {
  const arraySegment = "|Tanks :[" + tanks;
  const message = "]\n   |Expected : " + expected + "\n   |actual : ";

  return arraySegment + message + actual;
}

function testMeasureTankCapacity(tanks, expected) {
  const actual = measureTankCapacity(tanks);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(tanks, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testMeasureTankCapacity([], 0);
  testMeasureTankCapacity([0, 0, 0], 0);
  testMeasureTankCapacity([2, 2], 0);
  testMeasureTankCapacity([1, 2, 3, 4], 0);
  testMeasureTankCapacity([2, 0, 2, 0], 2);
  testMeasureTankCapacity([2, 2, 0], 0);
  testMeasureTankCapacity([2, 2, 0, 0], 0);
  testMeasureTankCapacity([2, 0, 2], 2);
  testMeasureTankCapacity([2, 0, 0, 2], 4);
  testMeasureTankCapacity([2, 0, 5], 2);
  testMeasureTankCapacity([1, 0, 5, 0, 5, 0, 3], 9);
  testMeasureTankCapacity([5, 2, 0, 4, 0, 6, 0, 0, 6, 0, 1], 19);
}

testAll();