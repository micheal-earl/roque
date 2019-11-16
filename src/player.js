"use strict"; // Interpret the code in strict mode

class Player extends Pawn {

  constructor(name, world, posX, posY, char, color, bgColor) {
    super(name, world, posX, posY, char, color, bgColor);

  }

  update(action, world) {
    switch(action) {
      case "move_up":
        this.move(world, this.posX, this.posY - 1);
        break;
      case "move_down":
        this.move(world, this.posX, this.posY + 1);
        break;
      case "move_left":
          this.move(world, this.posX - 1, this.posY);
        break;
      case "move_right":
          this.move(world, this.posX + 1, this.posY);
        break;
      default:
        break;
    }
  }

  draw(display) {
    super.draw(display);
  }

}