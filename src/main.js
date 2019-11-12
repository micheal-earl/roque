"use strict"; // Interpret the code in strict mode

let game = new Game();
document.body.appendChild(game.display.getContainer());

let input = new Input();

// This event listener is our pseudo game-loop
window.addEventListener("keydown", (e) => {
  let code = e.keyCode
  input.handle(code);
  game.update(input.action)
  game.draw();
});
