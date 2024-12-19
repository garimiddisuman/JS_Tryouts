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

  for (let i = screen.length - 1; i >= 0; i--) {
    string += screen[i].join("");
  }

  return string;
}

function putPixel(screen, char, x, y) {
  if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
    return;
  }

  screen[Math.floor(y)][Math.floor(x)] = char;
}

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function clearScreen(screen) {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = ' ';
    }
  }
}

function verticalRange(velocity, angle, time) {
  return Math.floor(-4.9 * Math.pow(time, 2) + velocity * Math.sin(angle) * time);
}

function horizontalRange(velocity, angle, time) {
  return Math.floor(velocity * Math.cos(angle) * time);
}

function timeOfFlite(velocity, angle) {
  return Math.ceil(velocity * Math.sin(angle) / 4.9);
}

function changeAngle(angle) {
  return degreesToRadians(angle - 30);
}

function projectile(screen, x, y, angle, velocity) {
  let string = "";
  const timeLimit = timeOfFlite(velocity, angle);
  let previous_x = x;
  let previous_y = y;

  for (let time = 0; time < timeLimit; time += 0.1) {
    const present_x = horizontalRange(velocity, angle, time);
    const present_y = verticalRange(velocity, angle, time);

    putPixel(screen, ".", previous_x, previous_y);
    putPixel(screen, "*", present_x, present_y);
    previous_x = present_x;
    previous_y = present_y;

    string += screenToString(screen);
  }

  return string;
}

function start() {
  const LENGTH = 40;
  const WIDTH = 80;
  console.log(WIDTH, LENGTH);

  const screen = createScreen(WIDTH, LENGTH, " ");
  console.log(projectile(screen, 0, 0, degreesToRadians(30), 30));
}

start();