"use strict"; // Interpret the code in strict mode

class Game {

  constructor() {
    this._width = 30;
    this._length = 30;

    this._display = new ROT.Display({ 
      width: this._width, 
      height: this._length,
      fontSize: 15,
      fontFamily: "monospace",
      forceSquareRatio: true
    });

    //document.body.appendChild(this._display.getContainer());

    this._world = new World(this._width, this._length);
    
    this._player = new Player(
      "Mike", 
      this._width  / 2, 
      this._length / 2,
      "@",
      "red",
      "#D3FFCE"
    );

    this.draw();
  }

  // Getters, Setters
  get display() { return this._display }
  get world() { return this._world }
  get player() { return this._player }

  update(action) {
    this._player.update(action, this.world)

  }

  // Render everything to the display
  draw() {
    this._world.draw(this._display);
    this._player.draw(this._display);
  }

}

let x = new Game();
