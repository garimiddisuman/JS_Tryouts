// guess the number
const secretNumber = Math.floor(Math.random() * 9);
const guessLimit = 3;
let guessCount = 0;

console.log("guess number from 0 to 9 in 3 chances");

// loop for chances
while (guessCount < guessLimit) {
    const guessNumber = Number(prompt("guessNumber:"));
    
    if (guessNumber === secretNumber) {
        console.log("YOU WON...!");
        break;
    }
    guessCount++;
}

if (guessCount === guessLimit) {
    console.log("BETTER LUCK NEXT TIME...");
}
