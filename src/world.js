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

  submatrix(arr, topLeft, bottomRight) {

    let out = new Array(bottomRight.row - topLeft.row);
  
    for (var i = topLeft.row; i <= bottomRight.row; i++) {
      out[i - topLeft.row] = new Array(bottomRight.col - topLeft.col);
      for (var j = topLeft.col; j <= bottomRight.col; j++) {
        console.log(arr[i].toString())
        if(false) {
          out[i - topLeft.row][j - topLeft.col] = null;
        } else {
          out[i - topLeft.row][j - topLeft.col] = arr[i][j];
        }
      }
    }
    
    return out;
  }

  draw(display, x, y) {
    /*
    for (var i = 0; i < this._width; i++) {
      for (var j = 0; j < this._length; j++) {
        let tile = this._state[i][j].tile;
        display.draw(i, j, tile.char, tile.color, tile.bgColor);
      }
    }
    */

    let camera = this.submatrix(
      this._state, 
      {row: y - 15, col: x - 15}, 
      {row: y + 15, col: x + 15}
    );

    for (var i = 0; i < camera.length; i++) {
      for (var j = 0; j < camera[i].length; j++) {
        if(camera[i][j] !== null) {
          let entity = camera[i][j].entity;
          if(entity !== null) {
            display.draw(i - 15, j - 15, tile.char, tile.color, tile.bgColor);
          } else {
            let tile = camera[i][j].tile;
            display.draw(i - 15, j - 15, tile.char, tile.color, tile.bgColor);
          }
        } else {
          display.draw(i, j, " ", "black", "");
        }
      }
    }
  }

}
