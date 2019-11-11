"use strict"; // Interpret the code in strict mode

let options = { 
  width: 30, 
  height: 30 ,
  fontSize: 15,
  fontFamily: "monospace",
  forceSquareRatio: true
};

// Set up our "terminal" display
let display = new ROT.Display(options);
document.body.appendChild(display.getContainer());

// Generate the world
let world = new World(options.width, options.height);

let player = new Player(
  "Mike", 
  world.width / 2, 
  world.length / 2,
  "@",
  "red",
  "#D3FFCE"
);

// Initially draw the world
world.draw(display);
player.draw(display);

// Get input, WASD movement, scuffed "gameloop"
window.addEventListener("keydown", (e) => {
  let code = e.keyCode

  // DEBUG
  console.log("x: " + player.posX + ", y: " + player.posY);

  if(code == "87") player.move(world, player.posX, player.posY - 1);
  if(code == "83") player.move(world, player.posX, player.posY + 1);
  if(code == "65") player.move(world, player.posX - 1, player.posY);
  if(code == "68") player.move(world, player.posX + 1, player.posY);

  world.draw(display);
  player.draw(display);
});
