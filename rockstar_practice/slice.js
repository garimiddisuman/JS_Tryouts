function _slice(start, end, string) {
  if (start === end) {
    return string[end];
  }

  return string[start] + _slice(start + 1, end);
} 

function max(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

function min(value1, value2) {
  return value1 > value2 ? value2 : value1;
}

function slice(start, end, string) {
  const max = maximum(start, 0);
  const min = minimum(end, string.length - 1);

  return _slice(max, min, string);
}


function testAll() {
  console.log(-1, 10, "suman");
}

testAll();