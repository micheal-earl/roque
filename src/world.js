"use strict"; // Interpret the code in strict mode

class World {

  // stupid simple for now, make a box
  constructor(width, length) {
    this._width = width;
    this._length = length;
    this._state = this.generateMap();
  }

  // Getters, Setters
  get state() { return this._state; }
  get width() { return this._width; }
  get length() { return this._length; }

  makeBlank2dArray(width, length) {
    let arr = new Array(width);

    for(let i = 0; i < width; i++) {
      arr[i] = new Array(length);
    }

    return arr;
  }

  generateMap() {
    let arr = this.makeBlank2dArray(this._width, this._length);

    for (var i = 0; i < this._width; i++) {
      for (var j = 0; j < this._length; j++) {
        if (!i || !j || i + 1 == this._width || j + 1 == this._length) {
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
