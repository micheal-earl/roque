let options = {
	width: 50,
	height: 20
};

let display = new ROT.Display(options);
document.body.appendChild(display.getContainer());

let player = new Player(
  "Mike", 
  options.width / 2, 
  options.height / 2
);

// Initially draw the world
drawWorld();
player.draw();

// Get input, WASD movement
window.addEventListener("keydown", (e) => {
  let code = e.keyCode;
  console.log(player.posX + " " + player.posY);

  if(code == "87") player.posY -= 1;
  if(code == "83") player.posY += 1;
  if(code == "65") player.posX -= 1;
  if(code == "68") player.posX += 1;

  drawWorld();
  player.draw();
});

function drawWorld() {
  for (var i = 0; i < options.width; i++) {
    for (var j = 0; j < options.height; j++) {
      if (!i || !j || i + 1 == options.width || j + 1 == options.height) {
        display.draw(i, j, "#", "gray");
      } else {
        display.draw(i, j, ".", "#666");
      }
    }
  }
}

function drawPlayer() {
  display.draw(player.posX, player.posY, "@", "goldenrod");
}