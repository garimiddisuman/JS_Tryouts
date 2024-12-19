// There are two arrays with individual values. 
// To compute the sum of each individual index value in the given array.

function add(a1, a2) {
  const arraysToAdd = a1.length < a2.length ? [a1, a2] : [a2, a1];
  const sums = [];

  for (let i = 0; i < arraysToAdd[0].length; i++) {
    sums.push(a1[i] + a2[i]);
  }

  for (let j = arraysToAdd[0].length; j < arraysToAdd[1].length; j++) {
    sums.push(arraysToAdd[1][j]);
  }

  return sums;
}

function testAll() {
  console.log(add([1, 2, 3, 4], [1, 2, 3, 4, 5]));
  console.log(add([1, 2, 3, 4], [1, 2, 3]));
}

testAll();