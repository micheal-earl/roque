let options = { width: 10, height: 10 };

// Set up our "terminal" display
let display = new ROT.Display(options);
document.body.appendChild(display.getContainer());

// Generate the world
let world = new World(options.width, options.height);

let player = new Player(
  "Mike", 
  world.width / 2, 
  world.length / 2
);

// Initially draw the world
world.draw(display);
player.draw(display);

// Get input, WASD movement, scuffed "gameloop"
window.addEventListener("keydown", (e) => {
  let code = e.keyCode

  console.log("x: " + player.posX + ", y: " + player.posY);

  if(code == "87") player.posY -= 1;
  if(code == "83") player.posY += 1;
  if(code == "65") player.posX -= 1;
  if(code == "68") player.posX += 1;

  world.draw(display);
  player.draw(display);
});
