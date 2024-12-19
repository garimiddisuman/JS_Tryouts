const range = function () {
  let i = 1;

  return function () {
    const j = i;
    i++;
    return j;
  }
};

const size = 5;
const nextNum = range();

const fill = function () {
  return "*".repeat(nextNum());
}

console.log(Array(size).fill(0).map(fill).join("\n"));