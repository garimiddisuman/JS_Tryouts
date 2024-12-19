// print a number into digits without reversing..by converting a into string..
// input : 1234
// output :
// 1
// 2
// 3
// 4

const number = 1234;

let stringNum = number + "";

for (let currentFirstDigit = 0; currentFirstDigit < stringNum.length; currentFirstDigit++) {
    let digit = +stringNum[currentFirstDigit]
    console.log(digit);
    console.log(typeof digit );
}