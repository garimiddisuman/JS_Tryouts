// binary to decimal convertion
const binary = 1010;

let binaryPower = 0;
let decimal = 0;
let candidateOfBinary = binary;

// multipling each digit with 2 power n,adding all those numbers.
while (candidateOfBinary > 0) {
    let lsb = candidateOfBinary % 10;
    candidateOfBinary = (candidateOfBinary - lsb) / 10;
    decimal = decimal + (2 ** binaryPower) * lsb;
    binaryPower += 1;
}

console.log(decimal);