function isPrefix(i, sentence, searchWord) {
  const subString = sentence.slice(i, i + searchWord.length);
  return subString === searchWord
}

function isPrefixOfWord(sentence, searchWord) {
  let words = 1;
  if (isPrefix(0, sentence, searchWord)) {
    return words;
  }

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      words++;
      if (isPrefix(i + 1, sentence, searchWord)) {
        return words;
      }
    }
  }
  return -1;
}


console.log(isPrefixOfWord("i love eating burger", "burg"));