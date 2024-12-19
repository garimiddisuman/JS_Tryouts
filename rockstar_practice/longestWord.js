function longestWord(array, index, longestWord) {
  if (index === array.length) {
    return longestWord;
  }

  if (array[index].length > longestWord.length) {
    longestWord = array[index];
  }

  return longestWord(array, index + 1, longestWord);
}

function findLongestWord(string) {
  if (string.trim() === '') {
    return 'The input string is empty.';
  }

  const array = string.split(" ");
  return longestWord(array, 0, '');
}