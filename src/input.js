"use strict"; // Interpret the code in strict mode

class Input {

  constructor(game) {
    //this._game = game;
    this._action = null;
  }

  get action() { return this._action }

  handle(code) {
        if(code == "87" || code == "38") {
          this._action = "move_up"
        } 

        if(code == "36") {
          this._action = "move_upleft"
        } 

        if(code == "33") {
          this._action = "move_upright"
        } 

        if(code == "83" || code == "40") {
          this._action = "move_down"
          //player.move(world, player.posX, player.posY + 1);
        }

        if(code == "35") {
          this._action = "move_downleft"
          //player.move(world, player.posX, player.posY + 1);
        }

        if(code == "34") {
          this._action = "move_downright"
          //player.move(world, player.posX, player.posY + 1);
        }
          
        if(code == "65" || code == "37") {
          this._action = "move_left"
          //player.move(world, player.posX - 1, player.posY);
        }
          
        if(code == "68" || code == "39") {
          this._action = "move_right"
          //player.move(world, player.posX + 1, player.posY);
        }
  }
  
}