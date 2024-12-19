function replaced(string, index, replacedString) {
  if (index === string.length) {
    return string + "\n" + replacedString;
  }

  replacedString += "-";
  return replaced(string, index + 1, replacedString)
}

function replacedWithUnderScore(string) {
  if (string === "") {
    return "";
  }

  return replaced(string, 0, "");
}

console.log(replacedWithUnderScore("suman"));