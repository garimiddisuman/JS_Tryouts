const number = 1234;
const nthDigit = 8;

let candidate = number;
let reverse = 0;
let currentDigit = 0;
let noOfDigits = 0;

// reverse a number
while (candidate > 0) {
    const remainder = candidate % 10;
    reverse = reverse * 10 + remainder;
    candidate = (candidate - remainder) / 10;
    noOfDigits += 1;
}

// finding nth digit
if (nthDigit > 0 && nthDigit <= noOfDigits) {
    for (let count = 0; count < nthDigit; count++) {
        currentDigit = reverse % 10;
        reverse = (reverse - currentDigit) / 10;
    }
    console.log(currentDigit);
}