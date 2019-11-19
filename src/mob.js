"use strict"; // Interpret the code in strict mode

class Mob extends Pawn {

  constructor(args) {
    super(args);

  }

  // Random AI
  update() {
    super.update();
    let action;
    let rng = ROT.RNG.getPercentage();
    if(rng >= 75) {
      // Move up
      this.move(this.posX, this.posY - 1);
    } else if(rng >= 50) {
      // Move down
      this.move(this.posX, this.posY + 1);
    } else if(rng >= 25) {
      // Move left
      this.move(this.posX - 1, this.posY);
    } else if(rng >= 0) {
      // Move right
      this.move(this.posX + 1, this.posY);
    }
  }

  draw(display) {
    super.draw(display);
  }

}