// print even fibanacci series and sum of even fibanacci terms

const noOfTerms = 10;

let previousTerm = 1;
let currentTerm = 2;
let nextTerm = 0;
let sumOfEvenTerms = 0;

for (let count = 0; count < noOfTerms; count++) {
    console.log(previousTerm);

    if (previousTerm % 2 == 0) {
        sumOfEvenTerms = sumOfEvenTerms + previousTerm;
    }
    nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
}

console.log("sumOfEvenTerms:", sumOfEvenTerms);


