// sum of multiples of 3 or 5 .
// multiples not repeat

const range = 1000;

let number = 3;
let sum = 0;

for (let number = 3; number < range; number++) {
    if (number % 3 == 0 || number % 5 == 0) {
        sum = sum + number;
    }
}

console.log(sum);