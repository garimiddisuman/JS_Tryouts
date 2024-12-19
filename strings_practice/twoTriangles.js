// M shape with two triangles...

const rows = 8;

for (let i = 1; i < rows; i++) {
  let star = "";

  for (let j = i; j < rows; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }

  for (let j = i * 2; j < rows * 2 - 2; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }
  for (let j = i * 2; j < rows * 2 - 2; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }
  for (let j = i * 2; j < rows * 2 - 2; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }
  for (let j = i * 2; j < rows * 2 - 2; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }for (let j = i * 2; j < rows * 2 - 2; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }for (let j = i * 2; j < rows * 2 - 2; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }for (let j = i * 2; j < rows * 2 - 2; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }for (let j = i * 2; j < rows * 2 - 2; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }
  console.log(star);
}