const range = function () {
  let i = 0;

  return function () {
    i++;
    return i;
  }
}

const rowLength = function (size) {
  return function (index) {
    return size - Math.abs(index - size);
  }
}

const isOdd = function (num) {
  return (num & 1) === 1;
}

const stars = function (times) {
  return '*'.repeat(times);
}

const pad = function(size) {
  return function (string) {
    return string.padStart(size - rowLength(size)(string.length));
  }
}

const diamond = function (size) {
  const height = size % 2 === 0 ? size - 1 : size;
  const fixedWidth = Array(height * 2 - 1).fill(0);
  const widthArray = fixedWidth.map(range()).map(rowLength(height)).filter(isOdd);

  return widthArray.map(stars).map(pad(height));
}

console.log(diamond(6));