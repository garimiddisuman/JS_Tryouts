// compound interest using recursion...

function _ci(p, r, t, currentYear) {
  if (currentYear > t) {
    return p;
  }

  return _ci(p + (p * r) / 100, r, t, currentYear + 1);
}

function ci(p, t, r) {
  return _ci(p, r, t, 1) - p;
}

console.log(10.25, ci(100, 5, 2));
console.log(15.76, ci(100, 5, 3));