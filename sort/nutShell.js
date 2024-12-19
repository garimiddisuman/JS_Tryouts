let PS1 = "sumangarimiddi@Sumans-MacBook-Pro ~ %";
const PS2 = "sumangarimiddi@Sumans-MacBook-Pro %";
const FILES = [];

const echo = function (arg) {
  console.log(arg.join(" "));
  return PS1;
}

const cd = function (arg) {
  const string = arg.join("");
  const startIndex = string.lastIndexOf('/');
  const currentFile = string.slice(startIndex + 1);
  return PS2.slice(0, -1) + currentFile + PS2.slice(-2);
}

const touch = function (arg, files) {
  files.push(...arg);
  return PS1;
}

const ls = function (files) {
  console.log(files.join("    "));
  return PS1;
}

const runningCommand = function (command, ...arg) {
  switch (command) {
    case 'echo': return echo(arg);
    case 'cd': return cd(arg);
    case 'touch' : return touch(arg, FILES);
    case 'ls' : return ls(FILES);
    // default : return externalCommand(arg);
  }

  console.log(command + ' Command not found');
  return PS1;
}

const myShell = function () {
  while (true) {
    const readCommand = prompt(PS1);
    const runCommand = runningCommand(...readCommand.split(" "));
    PS1 = runCommand;
  }
}

myShell();