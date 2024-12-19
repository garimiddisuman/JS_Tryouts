const str = "thoughtworks";
let noOfCharacters = 0;

for (let currentCharPos = 0; currentCharPos < str.length; currentCharPos++) {
  if (str[currentCharPos] === "o") {
    noOfCharacters += 1;
  }
}

console.log(noOfCharacters);