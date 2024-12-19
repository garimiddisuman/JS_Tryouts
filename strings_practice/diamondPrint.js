//  To print diamond....

const rows = 8;

for (let i = rows; i > 1; i--) {
  let star = "";

  for (let j = i; j < rows; j++) {
    star += " ";
  }

  for (let k = i; k > 1; k--) {
    star += " *";
  }
  console.log(star);
}

for (let i = 2; i < rows; i++) {
  let star = "";

  for (let j = i; j < rows; j++) {
    star += " ";
  }

  for (let k = 0; k < i; k++) {
    star += "* ";
  }
  console.log(star);
}
