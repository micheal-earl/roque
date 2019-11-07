let input = document.createElement("input");
input.focus();

let options = {
	width: 50,
	height: 20
}

let display = new ROT.Display(options);

let player = {
  x: options.width / 2,
  y: options.height / 2
}

document.body.appendChild(display.getContainer());

drawWorld();
display.draw(player.x, player.y, "@", "goldenrod");

window.addEventListener("keydown", (e) => {
  let code = e.keyCode;
  console.log(code)

  if(code == "87") player.y -= 1;
  if(code == "83") player.y += 1;
  if(code == "65") player.x -= 1;
  if(code == "68") player.x += 1;

  drawWorld();
  display.draw(player.x, player.y, "@", "goldenrod");
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