const selectFruit = function (fruits) {
  let index = -1;

  return function () {
    index++;

    if (index === fruits.length) {
      index = 0;
    }

    return fruits[index];
  }
};

const distribute = function (persons, fruits) {
  const nextFruit = selectFruit(fruits);

  return persons.map(function (x) { return x + " " + nextFruit() });
};

const persons = ['suman', 'meghashyam', 'bhanu', 'jayanth'];
const fruits = ['apple', 'banana', 'mango'];

console.log(distribute(persons, fruits));