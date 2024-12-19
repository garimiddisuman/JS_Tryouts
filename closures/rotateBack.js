const x = function (size) {
  const array = Array(size * 2 + 2).fill(0).map(function (_, i) { return i; }).map(function (index) { return size - Math.abs(index - size); });
  const array1 = array.slice(0, size).concat(array.slice(size + 1, -1));
  let i = -1;

  return function () {
    i++;
    if (i === array1.length) {
      i = 0;
    }
    return array1[i];
  }
}

console.log(x(5));