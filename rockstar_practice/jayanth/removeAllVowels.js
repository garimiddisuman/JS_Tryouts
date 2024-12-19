function isVowel(char, index) {
  const vowelsSet = "aeiouAEIOU";

  if (index === vowelsSet.length) {
    return false;
  }

  if (vowelsSet[index] === char) {
    return true;
  }

  return isVowel(char, index + 1);
}

function _removeVowels(string, index, stringWithoutVowels) {
  if (index === string.length) {
    return stringWithoutVowels;
  }

  stringWithoutVowels += isVowel(string[index], 0) ? "" : string[index];
  return _removeVowels(string, index + 1, stringWithoutVowels);
}

function removeVowels(string) {
  if (string === "") {
    return '';
  }

  return _removeVowels(string, 0, "")
}

console.log(removeVowels("suman"));