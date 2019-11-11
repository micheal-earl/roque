import { Pawn } from './pawn';

class Player extends Pawn {

  constructor(_name: string, _posX: number, _posY: number) {
    super(_name, _posX, _posY);

  }

}

export { Player };