"use strict"; // Interpret the code in strict mode

/* Do I really need a class for this?
class Tile {
  constructor(char, posX, posY, color) {
    this._char

    this._posX
    this._posY

    this._color
  }

  draw(display) {W
    display.draw(this._posX, this._posY, this._char, this._color);
  }
}
*/

let tile = {
  grass: {
    char: ".",
    color: "green",
    bgColor: "",
    isWalkable: true,
    blocksLOS: false
  },
  wall: {
    char: "#",
    color: "white",
    bgColor: "gray",
    isWalkable: false,
    blocksLOS: true
  }
};