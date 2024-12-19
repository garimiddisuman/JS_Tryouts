// arithmatic operations using switch case 

const operation = "+";
const firstNumber = 2;
const secondNumber = 5;

switch (operation) {
  case "+":
    console.log(firstNumber + secondNumber);
    break;
  case "-":
    console.log(firstNumber - secondNumber);
    break;
  case "*":
    console.log(firstNumber * secondNumber);
    break;
  case "/":
    console.log(firstNumber / secondNumber);
    break;
  case "%":
    console.log(firstNumber % secondNumber);
    break;
  case "**":
    console.log(firstNumber ** secondNumber);
    break;
  default:
    console.log("invalid operation");
}