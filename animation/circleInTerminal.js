const LENGTH = 40;
const WIDTH = 50;
const RADIUS = 10;
const MID_X = WIDTH / 2;
const MID_Y = LENGTH / 2;
console.log(WIDTH, LENGTH);

function createScreen(width, height, char) {
  const screen = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(char);
    }
    screen.push(row);
  }

  return screen;
}

function screenToString(screen) {
  let string = "";

  for (let i = 0; i < screen.length; i++) {
    string += screen[i].join("");
  }

  return string;
}

function putChar(screen, char, x, y) {
  screen[y][x] = char;
}

function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}

function clearScreen(screen) {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = ' ';
    }
  }
}

function needle(screen, midPoint, radius, angle) {
  for (let i = 0; i < radius; i += 0.05) {
    const x = Math.floor(i * Math.sin(radiansToDegrees(i))) + midPoint;
    const y = Math.floor(i * Math.cos(radiansToDegrees(i))) + midPoint;
    putChar(screen, "-", x, y);
  }
}

function circle() {
  let string = "";
  const screen = createScreen(WIDTH, LENGTH, " ");
  putChar(screen, "*", MID_X, MID_Y);

  for (let i = 0; i < 0.5; i += 0.05) {
    const x = Math.floor(RADIUS * Math.sin(radiansToDegrees(i))) + MID_X;
    const y = Math.floor(RADIUS * Math.cos(radiansToDegrees(i))) + MID_Y;
    putChar(screen, "*", x, y);
    needle(screen, MID_X, RADIUS, i);
    string += screenToString(screen);
  }

  return string;
}

console.log(circle());