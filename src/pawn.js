"use strict"; // Interpret the code in strict mode

class Pawn {

  constructor(name, world, posX, posY, char, color, bgColor = "") {
    this._name = name;
    this._world = world;
    this._posX = posX;
    this._posY = posY;
    this._char = char;
    this._color = color;
    this._bgColor = bgColor;

    // Place our Pawn in the world
    world.state[posX][posY].entity = this;
  }

  // Getters, Setters
  get posX() { return this._posX; }
  get posY() { return this._posY; }

  set posX(x) { this._posX = x; }
  set posY(y) { this._posY = y; }

  move(world, newX, newY) {
    let tile = world.state[newX][newY].tile;
    let entity = world.state[newX][newY].entity;
    let oldX = this._posX;
    let oldY = this._posY;

    if(tile.isWalkable) {
      // Remove this Pawn from its current location
      world.state[oldX][oldY].entity = null;

      // Update this Pawns internal position tracking
      this._posX = newX;
      this._posY = newY;

      // Place this Pawn in a new location
      world.state[newX][newY].entity = this;
    } else if(entity === null) {
      // TODO: Output to real game log instead of console.log
      console.log("There is already an entity here!");
      console.log(entity);
    } else {
      console.log("You cannot walk over this tile!");
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
