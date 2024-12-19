//  read me.....

// if we type start , car will be start 
// if we type stop , car will be stop 
// if we type help , instruction will be display
// if we type quit , game will be over.

const command = 0;
let started = false;

console.log("---car game----");
console.log("if you don't know rules type help...");

while (command !== "quit") {
  const command = prompt(">");

  if (command === "start") {
    if (started) {
      console.log("car already started...");
    } else {
      started = true;
      console.log("car started ...ready to GO");
    }
  }
  if (command === "stop") {
    if (!started) {
      console.log("car already stopped...")
    } else {
      started = false;
      console.log("car stopped...");
    }
  }
  if (command === "help") {
    console.log("start > to start car");
    console.log("stop > to stop car");
    console.log("quit > to quit game");
  }
  if (command === "quit") {
    console.log("Game over...");
    break;
  }
}