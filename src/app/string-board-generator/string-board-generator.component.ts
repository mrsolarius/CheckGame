import { Component, OnInit } from '@angular/core';
import {Board, Cell} from "../checkers.data";

@Component({
  selector: 'app-string-board-generator',
  templateUrl: './string-board-generator.component.html',
  styleUrls: ['./string-board-generator.component.scss']
})
export class StringBoardGeneratorComponent implements OnInit {
  static readonly CELLS_TYPES : Cell[] = ["Empty", "Black", "White","BlackKing", "WhiteKing"];
  public board : Board;
  constructor() {
    this.board = new Array(10).map(() => new Array(10).fill('Empty')) as Board;
  }

  ngOnInit(): void {
    this.board = [
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
    ]
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

  valueChange(iRow:  number, iColumn: number) {
    const cell = this.board[iRow][iColumn];
    if(iRow%2==1 && iColumn%2==0 || iRow%2==0 && iColumn%2==1) {
      this.board[iRow][iColumn] = StringBoardGeneratorComponent.CELLS_TYPES[(StringBoardGeneratorComponent.CELLS_TYPES.indexOf(cell) + 1) % StringBoardGeneratorComponent.CELLS_TYPES.length];
    }
  }

  boardToString() {
    return this.board.map(row => row.map(cell => this.cellToString(cell)).join('')).join('\n');
  }

  copyToClipboard(withCode: boolean) {
    const text = this.boardToString();
    if(withCode) {
      navigator.clipboard.writeText('const board = getBoardFromString(`'+text+'`);');
    }
    else {
      navigator.clipboard.writeText(text);
    }
  }

  resetTable() {
    this.board = [
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
      ['Empty',"Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
    ]
  }
}
