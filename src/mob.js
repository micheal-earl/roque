"use strict"; // Interpret the code in strict mode

class Mob extends Pawn {

  constructor(args) {
    super(args);

  }

  // Random AI
  update() {
    super.update();

    // Bugfix to prevent movement once an entity
    // is flagged as not existing
    if(!this._doesExist) {
      return false;
    }

    let rng = ROT.RNG.getPercentage();
    //rng = -1;
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