//Game turn
import {Observable} from "rxjs";

export type Turn = 'white' | 'black';
//Different types of discs
export type Discs = Turn | 'blackKing' | 'whiteKing';
//The content of a cell
export type Cell = 'Empty' | Discs;

//Row of the board
export type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
//The board
export type Board = [Row, Row, Row, Row, Row, Row, Row, Row];

//Immutable board row
export type Row_RO = readonly [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
//Immutable board
export type Board_RO = readonly [Row_RO, Row_RO, Row_RO, Row_RO, Row_RO, Row_RO, Row_RO, Row_RO];

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
