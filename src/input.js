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
        }

        if(code == "35") {
          this._action = "move_downleft"
        }

        if(code == "34") {
          this._action = "move_downright"
        }
          
        if(code == "65" || code == "37") {
          this._action = "move_left"
        }
          
        if(code == "68" || code == "39") {
          this._action = "move_right"
        }
  }
  
}