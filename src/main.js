"use strict";

 // Interpret the code in strict mode

let game = new Game();
let input = new Input();

// This event listener is our pseudo game-loop
window.addEventListener("keydown", (e) => {
  let code = e.keyCode
  input.handle(code);
  game.update(input.action)
  game.draw();
});

game.display.getContainer().addEventListener("mousemove", (e) => {
  let canvas = game.display.getContainer();
  var rect = canvas.getBoundingClientRect();

  let x = Math.floor((e.clientX - rect.left) / 16);
  let y = Math.floor((e.clientY - rect.left) / 16);

  console.log("x: " + x + " y: " + y);

  game.draw();
  game.display.draw(x, y, "=", "green", "green");

});