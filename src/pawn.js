"use strict"; // Interpret the code in strict mode

class Pawn {

  constructor(name, posX, posY, char, color, bgColor) {
    this._name = name;
    this._posX = posX;
    this._posY = posY;
    this._char = char;
    this._color = color;
    this._bgColor = bgColor;
  }

  // Getters, Setters
  get posX() { return this._posX; }
  get posY() { return this._posY; }

  set posX(x) { this._posX = x; }
  set posY(y) { this._posY = y; }

  move(world, x, y) {
    let tile = world.state[x][y];
    if(tile.isWalkable) {
      this._posX = x;
      this._posY = y;
    } else {
      // DEBUG
      console.log("tile not walkable");
      console.log(tile);
    }
  }

  update(action) {
    // Nothing here yet, will handle AI?
  }

  draw(display) {
    display.draw(
      this._posX, 
      this._posY, 
      this._char, 
      this._color, 
      this._bgColor
      );
  }

}
