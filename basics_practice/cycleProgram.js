const number = 123;
const range = 6;

let noOfDigits = range;
let candidate = number;
let reverse = 0;
let digitsCount = 0;
let cyclicity = 0;

// reverse a number
while (candidate > 0) {
    const remainder = candidate % 10;
    reverse = reverse * 10 + remainder;
    candidate = (candidate - remainder) / 10;
    digitsCount += 1;
}

const reverseCopy = reverse;
let currentDigit = 0;

// printing cyclicity
for (let count = 0; count < noOfDigits; count++) {
    if (currentDigit < digitsCount) {
        let digit = reverse % 10;
        cyclicity = (cyclicity * 10) + digit;
        reverse = (reverse - digit) / 10;
        currentDigit += 1;
    } else {
        currentDigit = 0;
        reverse = reverseCopy;
        noOfDigits += 1;
    }
}

console.log(cyclicity);

