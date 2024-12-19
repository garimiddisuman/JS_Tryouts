function shuffle(set) {
  let shuffle = [set[set.length - 1]];

  for (let i = 0; i < set.length - 1; i++) {
    shuffle[shuffle.length] = set[i];
  }

  return shuffle;
}

function circularRotate(set, times) {
  for (let i = 0; i < times; i++) {
    set = shuffle(set);
  }

  return set;
}

console.log(circularRotate([1, 2, 3, 4, 5], 2));