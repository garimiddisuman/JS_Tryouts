// learning arreys...

/*   ----- biggest number in an arrey -----
function _big(a, current, big) {
  if (current === a.length) {
    return big;
  }
  if (big < a[current]) {
    big = a[current];
  }

  return _big(a, current + 1, big);ˇ
}

function big(a) {
  return _big(a, 1, a[0])
}
console.log(big([45, 6, 24, 56, 97, 8, 5, 12], [0]));
*/



// ----- sorting an arrey -------

const a = [9, 8, 7, 6, 4, 3, 25, 6, 2, 1, 45];

for (let i = 0; i < a.length; i++) {
  for (let j = i; j < a.length; j++) {
    if (a[i] > a[j]) {
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}

console.log(a);
console.log(a.reverse());