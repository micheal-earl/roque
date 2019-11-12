"use strict"; // Interpret the code in strict mode

class Input {

  constructor(game) {
    //this._game = game;
    this._action = null;
  }

  get action() { return this._action }

  handle(code) {
        if(code == "87") {
          this._action = "move_up"
          //player.move(world, player.posX, player.posY - 1);
        } 

        if(code == "83") {
          this._action = "move_down"
          //player.move(world, player.posX, player.posY + 1);
        }
          
        if(code == "65") {
          this._action = "move_left"
          //player.move(world, player.posX - 1, player.posY);
        }
          
        if(code == "68") {
          this._action = "move_right"
          //player.move(world, player.posX + 1, player.posY);
        }
  }
  
}