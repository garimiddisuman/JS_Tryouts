// function addTwoNumbers(l1, l2) {
//   const result = [];

//   for (let i = l1.length - 1; i >= 0; i--) {
//     result.push((l1[i] + l2[i]) % 10);
//     l1[i - 1] = l1[i - 1] + Math.floor((l1[i] + l2[i]) / 10);
//   }

//   return result;
// };

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // 342 + 465 = 807 -> [7,0,8]
// console.log(addTwoNumbers([1, 1, 1], [2, 2, 9]));

// var isPalindrome = function (x) {
//   const string = "" + x;
//   let start = 0;
//   let end = string.length - 1;
//   while (start < end) {
//     if (string[start] !== string[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// };

// console.log(isPalindrome(121),121)
// console.log(isPalindrome(-121),-121)
// console.log(isPalindrome(10),10)

const reverse = function (x) {
  let remainingDigits = Math.abs(x);
  let rev = 0;
  while (remainingDigits > 0) {
    rev = (rev * 10) + (remainingDigits % 10);
    remainingDigits = Math.floor(remainingDigits / 10);
  }
  rev = x < 0 ? -1 * rev : rev;
  if (-(2 ** 31) >= rev || rev >= ((2 ** 31) - 1)) {
    return 0;
  }

  return rev;
};
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))