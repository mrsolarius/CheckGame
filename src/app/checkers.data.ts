//Game turn
import {Observable} from "rxjs";

export type Turn = 'White' | 'Black';
//Different types of discs
export type Discs = Turn | 'BlackKing' | 'WhiteKing';
//The content of a cell
export type Cell = 'Empty' | Discs;

//Row of the board
export type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,Cell,Cell];
//The board
export type Board = [Row, Row, Row, Row, Row, Row, Row, Row,Row,Row];

//Immutable board row
export type Row_RO = readonly [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,Cell,Cell];
//Immutable board
export type Board_RO = readonly [Row_RO, Row_RO, Row_RO, Row_RO, Row_RO, Row_RO, Row_RO, Row_RO,Row_RO,Row_RO];

//One coordinate of the board
export type TileCoords = readonly [x:number, y:number];
//Coordinates List
export type TileCoordsList = readonly TileCoords[];

//The game state
export interface GameState {
    //State of the board
    board: Board_RO;
    //Player turn
    turn: Turn;
}

export type playReturns = null | {error:'out of range' | 'not your turn' | 'can not move there'};

//The game state for MVP/MVC
export interface GameStateInterface {
    //State of the board
    readonly board: Board_RO;
    //Player turn
    readonly turn: Turn;
    //Who is the winner
    readonly winner: null | Turn;
    //Where the player can play
    whereCanPlay(from:TileCoords):TileCoordsList;
    //Play a move
    playMove(from:TileCoords, to:TileCoords):playReturns;
    //Observable of the game state
    gameStateObjs:Observable<GameState>;
}

/**
 * This function generate the initial game state
 * - The board is a 10x10 array of cells
 * - At the beginning of the game, the board looks like this :
 * ```
 * ·=Empty, B=Black, W=White
 * +----------+
 * |·B·B·B·B·B|
 * |B·B·B·B·B·|
 * |·B·B·B·B·B|
 * |..........|
 * |..........|
 * |·W·W·W·W·W|
 * |W·W·W·W·W·|
 * |·W·W·W·W·W|
 * +----------+
 *```
 * @return GameState
 */
export function getInitialGameState():GameState{
  return {
    board:new Array(10).fill(0).map((_,rowIndex)=>{
      return new Array(10).fill('Empty').map((_,columnIndex)=>{
        if(rowIndex%2==1 && columnIndex%2==0){
          if(rowIndex<4){
            return 'Black'
          }else if (rowIndex>5){
            return 'White'
          }
        }else if(rowIndex%2==0 && columnIndex%2==1){
          if(rowIndex<3){
            return 'Black'
          }else if (rowIndex>5){
            return 'White'
          }
        }
        return 'Empty'
      })
    }) as Board,
    turn:'White'
  };
}

export function cellToString(Cell:Cell):string{
  switch(Cell){
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
