import { Component } from '@angular/core';
import {CheckersService} from "./checkers.service";
import {Cell, cellToString} from "./checkers.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'checkers-game';

  constructor(public checkersGame: CheckersService) {
    checkersGame.gameStateObjs.subscribe(gs => {
      console.log(gs);
    })
  }

  get board() {
    return this.checkersGame.board;
  }

  get turn() {
    return this.checkersGame.turn;
  }

  cellToString(cell: Cell) {
    switch(cell){
      case 'Empty':
        return '·';
      case 'Black':
        return 'B';
      case 'BlackKing':
        return 'BK';
      case 'White':
        return 'W';
      case 'WhiteKing':
        return 'WK';
      default:
        return '?';
    }
  }
}
