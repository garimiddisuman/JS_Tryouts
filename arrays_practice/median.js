// var findMedianSortedArrays = function (nums1, nums2) {
//   let sum = 0;
//   for (const element of nums1) {
//     sum += element;
//   }
//   for (const element of nums2) {
//     sum += element;
//   }

//   return Math.floor(sum / (nums1.length + nums2.length));
// };

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

var fizzBuzz = function (n) {
  const array = [];

  for (let number = 1; number <= n; number++) {
    if (isDivisible(number, 15)) {
      array.push("fizzbuzz");
      continue;
    }
    if (isDivisible(number, 3)) {
      array.push("fizz");
      continue;
    }
    if (isDivisible(number, 5)) {
      array.push("buzz");
      continue;
    }
    array.push("" + number);
  }

  return array;
};

