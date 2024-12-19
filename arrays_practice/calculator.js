const add = function (x, y) {
  return x + y;
}

const sub = function (x, y) {
  return x - y;
}

const mul = function (x, y) {
  return x * y;
}

const div = function (x, y) {
  return Math.floor(x / y);
}

const modulo = function (x, y) {
  return x % y;
}

const doOperation = function (opcode, operand1, operand2) {
  return opcode(operand1, operand2);
}

const displayInstructions = function () {
  console.log('\n  0️⃣ ---> ADDITION');
  console.log('  1️⃣ ---> SUBTRATION');
  console.log('  2️⃣ ---> MULTIPLICATION');
  console.log('  3️⃣ ---> DIVISION');
  console.log('  4️⃣ ---> MODULUS\n');
}

const selectOperation = function () {
  const choice = +prompt(" select operation : ");

  if (choice < 5 && choice > -1) {
    return choice;
  }

  console.log("  Invalid operation \n  Choose valid operation\n");
  return selectOperation();
}

function start() {
  displayInstructions();
  const operations = [add, sub, mul, div, modulo];
  const choice = selectOperation();
  const operand1 = +prompt(" Enter first number : ");
  const operand2 = +prompt(" Enter second number : ");
  const operation = operations[choice];

  console.log(' ANSWER : ', doOperation(operation, operand1, operand2));
}

start();