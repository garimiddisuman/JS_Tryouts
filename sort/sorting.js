const a = [100, 99, 20, 1, 50, 25, 500, 105, 103, 200, 300, 250];

// if numbers greater than 100 descending order. else ascending order...  
a.sort(function (a, b) {
  if (a < 100) {
    return a - b;
  }

  return b - a;
});

// odd Numbers Right side, even Numbers Left side..
const isOdd = function (num) {
  return num & 1;
}

const dividingEvensAndOdds = function (a, b) {
  return isOdd(a) === isOdd(b) ? a - b : isOdd(a) - isOdd(b);
}

const seperateOddsAndEvens = function (array) {
  return array.sort(dividingEvensAndOdds);
}

// get chars from ascii values .....
const chars = function (start, size) {
  return Array(size).fill(0).map(function (_, i) { return i + start; }).map(function (code) { return String.fromCharCode(code) });
}