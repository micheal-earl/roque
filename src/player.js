"use strict"; // Interpret the code in strict mode

class Player extends Pawn {

  constructor(name, world, posX, posY, char, color, bgColor) {
    super(name, world, posX, posY, char, color, bgColor);

  }

  update(action, world) {
    switch(action) {
      case "move_up":
        world.moveEntity(this, this.posX, this.posY - 1);
        break;
      case "move_down":
        world.moveEntity(this, this.posX, this.posY + 1);
        break;
      case "move_left":
          world.moveEntity(this, this.posX - 1, this.posY);
        break;
      case "move_right":
          world.moveEntity(this, this.posX + 1, this.posY);
        break;
      default:
        break;
    }
  }

  draw(display) {
    super.draw(display);
  }

}