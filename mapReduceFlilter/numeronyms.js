const string = 'suman is a good boy';

const toNumeronyms = function (string) {
  if (string.length < 3) {
    return string;
  }

  return string.at(0) + (string.length - 2)+ string.at(-1);
};

const numeronyms = function (string) {
  return (string.split(" ").map(toNumeronyms)).join(" ");
};

console.log(numeronyms(string));