"use strict"; // Interpret the code in strict mode

class World {

  // stupid simple for now, make a box
  constructor(width, length) {
    this._width = width;
    this._length = length;
    this._state = this.generateMap(this._width, this._length);
  }

  // Getters, Setters
  get state() { return this._state; }
  get width() { return this._width; }
  get length() { return this._length; }

  makeXYArray(width, length) {
    let arr = new Array(width);

    for(let i = 0; i < width; i++) {
      arr[i] = new Array(length);
    }

    return arr;
  }

  generateMap(width, length) {
    let arr = this.makeXYArray(width, length);

    for (var i = 0; i < width; i++) {
      for (var j = 0; j < length; j++) {
        if (!i || !j || i + 1 == width || j + 1 == length) {
          arr[i][j] = tile.wall;
        } else {
          arr[i][j] = tile.grass;
        }
      }
    }

    return arr;
  }

  draw(display) {
    for (var i = 0; i < this._width; i++) {
      for (var j = 0; j < this._length; j++) {
        // this._state[i][j].draw(display)
        let tile = this._state[i][j];
        display.draw(i, j, tile.char, tile.color, tile.bgColor);
      }
    }
  }

}
