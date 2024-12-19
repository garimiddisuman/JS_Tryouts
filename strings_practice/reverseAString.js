const str = "malayalam";
let strRev = "";

for(let currentLastCharacter = (str.length - 1); currentLastCharacter >= 0; currentLastCharacter--) {
    stringReverse = stringReverse + str[currentLastCharacter];
}
console.log(stringReverse);

const isPalindrome = (stringReverse === str);

console.log(isPalindrome);