"use strict"; // Interpret the code in strict mode

class World {

  // Map gen is super simple for now
  constructor(width, length) {
    this._width = width;
    this._length = length;
    this._state = this.generateMap(width, length);
  }

  // Getters, Setters
  get state() { return this._state; }
  get width() { return this._width; }
  get length() { return this._length; }
  getEntity(x, y) { return this._state[x][y].entity; }
  getTile(x, y) { return this._state[x][y].tile; }

  setTile(tile, x, y) { this._state[x][y].tile = tile; }
  setEntity(entity, x, y) { this._state[x][y].entity = entity; }

  /*
  * Make a 2d array populated with this struct
  * {
  *   tile: null,
  *   entity: null,
  *   items: {}
  * };
  */
  makeEmptyMap(width, length) {
    let arr = new Array(width);

    for(let i = 0; i < width; i++) {
      arr[i] = new Array(length);
    }

    for (var i = 0; i < width; i++) {
      for (var j = 0; j < length; j++) {
        arr[i][j] = {
          tile: null,
          entity: null,
          items: {}
        };
      }
    }

    return arr;
  }

  // Generate our map features
  generateMap(width, length) {
    let arr = this.makeEmptyMap(width, length);

    for (var i = 0; i < width; i++) {
      for (var j = 0; j < length; j++) {
        if (!i || !j || i + 1 == width || j + 1 == length) {
          arr[i][j].tile = tiles.wall;
        } else {
          arr[i][j].tile = tiles.grass;
        }
      }
    }

    return arr;
  }

  draw(display) {
    for (var i = 0; i < this._width; i++) {
      for (var j = 0; j < this._length; j++) {
        let tile = this._state[i][j].tile;
        display.draw(i, j, tile.char, tile.color, tile.bgColor);
      }
    }
  }
}
