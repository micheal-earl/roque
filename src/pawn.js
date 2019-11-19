"use strict"; // Interpret the code in strict mode

class Pawn {

  constructor(args) {
    this._name = args.name;
    this._world = args.world;
    this._posX = args.position.x;
    this._posY = args.position.y;
    this._char = args.char;
    this._color = args.color;
    this._bgColor = args.bgColor;

    this._hp = args.hp;

    this._doesExist = true;
    this._isAttackable = true;
    this._isHostile = true;
    

    // Place our Pawn in the world
    this._world.state[this._posX][this._posY].entity = this;
  }

  // Getters, Setters
  get name() { return this._name; }
  get posX() { return this._posX; }
  get posY() { return this._posY; }
  get isAttackable() { return this._isAttackable; }
  get isHostile() { return this._isHostile; }
  get doesExist() { return this._doesExist; }
  get hp() { return this._hp; }

  set posX(x) { this._posX = x; }
  set posY(y) { this._posY = y; }
  set hp(hp) { this._hp = hp; }
  set doesExist(flag) { this._doesExist = flag; }

  move(newX, newY) {
    let world = this._world;
    let tile = world.getTile(newX, newY);
    let entity = world.getEntity(newX, newY);
    let oldX = this._posX;
    let oldY = this._posY;

    if(tile.isWalkable && entity === null) {
      // Remove this Pawn from its current location
      world.setEntity(null, oldX, oldY);

      // Update this Pawns internal position tracking
      this._posX = newX;
      this._posY = newY;

      // Place this Pawn in a new location
      world.setEntity(this, newX, newY);
    } else {
      if(entity !== null && entity.isAttackable && entity.isHostile ) {
        this.attack(newX, newY)
      } else if(entity !== null && !entity.isHostile) {
        // TODO: add confirmation for attack against non-hostile target
        console.log("Are you sure you want to attack this dude?");
        console.log(entity);
      } else if(entity !== null) {
        console.log("There's already an entity there!");
        console.log(entity);
      }
      if(!tile.isWalkable) {
        console.log("You cannot walk over this tile!");
        console.log(tile);
      }
    }
  }

  attack(x, y) {
    let world = this._world;
    let entity = world.getEntity(x, y);
    if(entity !== null) {
      let damage = this.calculateDamage();
      entity.hp = entity.hp - damage;
      console.log(this._name + " attacks " + entity.name 
                  + " with your {WEAPON}");
      console.log("They do " + damage + " damage! Target HP: " + entity.hp);
    }
  }
  
  // Will calculate basic attack damage based on stats here
  calculateDamage() {
    let damage;
    // TODO: Actually calculate damage, using dummy value for now
    damage = 5;
    return damage;
  }

  die() {
    let world = this._world;
    world.setEntity(null, this._posX, this.posY);
    this._doesExist = false;
  }

  update() {
    if(this._hp <= 0) {
      this.die();
    }
  }

  draw(display) {
    display.draw(
      this._posX, 
      this._posY, 
      this._char, 
      this._color, 
      this._bgColor
      );
  }

}
