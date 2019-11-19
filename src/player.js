"use strict"; // Interpret the code in strict mode

class Player extends Pawn {

  constructor(args) {
    super(args);

  }

  update(action) {
    super.update();
    switch(action) {
      case "move_up":
        this.move(this.posX, this.posY - 1);
        break;
      case "move_upleft":
        this.move(this.posX - 1, this.posY - 1);
        break;
      case "move_upright":
        this.move(this.posX + 1, this.posY - 1);
        break;
      case "move_down":
        this.move(this.posX, this.posY + 1);
        break;
      case "move_downleft":
        this.move(this.posX - 1, this.posY + 1);
        break;
      case "move_downright":
        this.move(this.posX + 1, this.posY + 1);
        break;
      case "move_left":
        this.move(this.posX - 1, this.posY);
        break;
      case "move_right":
        this.move(this.posX + 1, this.posY);
        break;
      default:
        break;
    }
  }

  draw(display) {
    super.draw(display);
  }

}