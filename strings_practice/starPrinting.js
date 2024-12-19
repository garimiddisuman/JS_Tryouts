// equilateral triangle shape triangle print..

const noOfRows = 5

for (let column = 0; column < noOfRows; column++) {
  let star = "";
  let space = "";
  
  for (let spaces = column + 1; spaces < noOfRows; spaces++) {
    space += " ";
  }
  for (let stars = 0; stars < (2 * column - 1); stars++) {
    star += "*";
  }
  console.log(space, star);
}