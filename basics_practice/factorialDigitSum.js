// to find factorial and sum of digits.

const number = 10;

let fact = 1;
let sumOfDigits = 0;

// to find factorial
for (let currentNumber = 2; currentNumber <= number; currentNumber++) {
    fact = fact * currentNumber;
}

// to find each digit and sum of those digits.
while ( fact > 0) {
    let digit = fact % 10;
    fact = (fact - digit) / 10;
    sumOfDigits = sumOfDigits + digit;
}

console.log(sumOfDigits);