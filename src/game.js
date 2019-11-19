"use strict"; // Interpret the code in strict mode

class Game {

  constructor() {
    // Make a new Rot.js display
    this._display = new ROT.Display({ 
      width: 30, 
      height: 30,
      fontSize: 16,
      fontFamily: "monospace",
      forceSquareRatio: true
    });

    // Append the Rot.js display to our html
    document.body.appendChild(this._display.getContainer());

    let worldWidth = 60;
    let worldHeight = 60;
    this._world = new World(worldWidth, worldHeight);
    this._entities = [];
    
    this._player = new Player({
      name: "Mike", 
      hp: 50,
      world: this._world,
      position: {
        x: Math.floor(worldWidth  / 2), 
        y: Math.floor(worldHeight / 2)
      },
      char: "@",
      color: "white",
      bgColor: ""
    });

    this.makeMob(mobs.zombie, 12, 12);
    this.makeMob(mobs.dog, 18, 12);
    this.makeMob(mobs.cultivator, 11, 16);

    this.draw();
  }

  // Getters, Setters
  get display() { return this._display }
  get world() { return this._world }
  get player() { return this._player }

  // TODO: Find a better place for this function?
  makeMob(type, x, y) {
    let args = {
      name: type.name,
      hp: 50,
      world: this._world,
      position: { 
        x: x, 
        y: y 
      },
      char: type.char,
      color: type.color,
      bgColor: type.bgColor
    }

    let newMob = new Mob(args); 

    this._entities.push(newMob);
  }

  update(action) {
    this._player.update(action)

    for(let i = 0; i < this._entities.length; i++) {
      if(!this._entities[i].doesExist) {
        this._entities.splice(i, 1);
        i--;
      } else {
        this._entities[i].update();
      }
    }
  }

  draw() {
    this._world.draw(this._display, this._player.posX + 15, this._player.posY + 15);
    //this._player.draw(this._display);

    for(let i = 0; i < this._entities.length; i++) {
      if(this._entities[i].doesExist) {
        //this._entities[i].draw(this._display);
      }
    }
  }
}
