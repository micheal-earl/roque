"use strict"; // Interpret the code in strict mode

class World {

  // Map gen is super simple for now
  constructor(width, length) {
    this._width = width;
    this._length = length;
    this._state = this.generateMap(width, length);

    this._camera = { x: 15, y: 15, w: 30, h: 30 }
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

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
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

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
        if (!i || !j || i + 1 == width || j + 1 == length) {
          arr[i][j].tile = tiles.wall;
        } else {
          if(ROT.RNG.getPercentage() > 95) {
            arr[i][j].tile = tiles.grass2;
          } else {
            arr[i][j].tile = tiles.grass;
          }
        }
      }
    }

    return arr;
  }

  draw(display, x, y) {

    // Draw black across display
    /*
    for(let i = 0; i < this._state.length; i++) {
      for(let j = 0; j < this._state[i].length; j++) {
        display.draw(i, j, "", "black", "black" );
      }
    }
    */

    // The camera works! This code is really bad
    // TODO: Refactor camera code

    let initX = this._camera.x;
    let initY = this._camera.y;
    let cameraWidth = this._camera.w;
    let cameraHeight = this._camera.h;

    let difX = initX - x;
    let difY = initY - y;

    for (let i = x - 15; i <= x + 15; i++) {
      for (let j = y - 15; j <= y + 15; j++) {
        try {
          let tile = this._state[i][j].tile;
          let e = this._state[i][j].entity;
          display.draw(
            i + difX, 
            j + difY, 
            tile.char, tile.color, tile.bgColor
          );
          if(e !== null) {
            display.draw(
              i + difX, 
              j + difY, 
              e._char, e._color, e._bgColor
            );
          }
        } catch {
          display.draw(
            i + difX, 
            j + difY, 
            "", "black", "black"
          );
        }
      }
    }

    /*
    for (var i = 0; i < this._width; i++) {
      for (var j = 0; j < this._length; j++) {
        let tile = this._state[i][j].tile;
        display.draw(i, j, tile.char, tile.color, tile.bgColor);
      }
    }
    */
  }
}
