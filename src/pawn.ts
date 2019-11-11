const ROT = require("../node_modules/rot-js/dist/rot.min.js");

class Pawn {
  
  private name: string;
  public posX: number;
  public posY: number;

  /*
  get posX(): number { return this.posX; }
  get posY(): number { return this.posY; }

  set posX(x: number) { this.posX = x; }
  set posY(y: number) { this.posY = y; }
  */

  constructor(_name: string, _posX: number, _posY: number) {
    this.name = _name;
    this.posX = _posX;
    this.posY = _posY;
  }

  draw() {
    ROT.draw(this.posX, this.posY, "@", "goldenrod");
  }

}

export { Pawn };