import { Injectable } from '@angular/core';
import {
  Board_RO,
  GameState,
  GameStateInterface,
  PlayReturns,
  TileCoords,
  TileCoordsList,
  Turn,
  getInitialGameState,
  Win, WhereCanPlayReturns
} from "./checkers.data";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckersService implements GameStateInterface{

  constructor() {
    this.gameStateSubject.next(getInitialGameState());
  }

  protected gameStateSubject = new BehaviorSubject<GameState>(getInitialGameState());
  gameStateObjs: Observable<GameState> = this.gameStateSubject.asObservable();

  /**
   * Get the current turn
   * @returns Turn
   */
  get turn(): Turn {
    return this.gameStateSubject.value.turn;
  }

  /**
   * Get the current state of board
   * @returns Board_RO
   */
  get board(): Board_RO {
    return this.gameStateSubject.value.board;
  }

  /**
   * Check if the game is over and return the winner
   * @return 'Black' | 'White' | 'Equality' | null
   * - it will return Black if there is White pieces on the board
   * - it will return White if there is Black pieces on the board
   * - it will return Equality if the number of kings is equal to 3 (Regardless of the color)
   * - it will return Equality if the number of kings is equal to 2 and one discs (Regardless of the color)
   * - it will return Equality if the number of kings is equal to 1 and two discs (Regardless of the color)
   * - it will return null if none of the previous conditions are met
   */
  winner(): Win{
    return null;
  };

  /**
   * This function will play a move on the board
   *
   * If you can play a move it will return null and update the board
   * If you can't play a move it will return one of the following errors:
   * - {error:'out of range'} if coords aren't positive integers or are out of the board
   * - {error:'no piece'} if there is no piece on the given from coordinates
   * - {error:'not your turn'} if it's not the turn of the piece corresponding to the given from coordinates
   * - {error:'can't move'} if the piece corresponding to the given from coordinates can't move to the given to coordinates
   * @param from the coordinates of the piece to move
   * @param to the coordinates of the destination
   * @returns PlayReturns the error message or null if the move was played
   */
  playMove(from: TileCoords, to: TileCoords): PlayReturns {
    return null;
  }

  /**
   * This function will return the list of possible moves for the piece corresponding
   * to the given coordinates (note:the list could be empty)
   * If they can't return the list it will return one of the following errors:
   * - {error:'out of range'} if coords aren't positive integers or are out of the board
   * - {error:'no piece'} if there is no piece on the given from coordinates
   * @param from
   */
  whereCanPlay(from: TileCoords): WhereCanPlayReturns {
    return [];
  }
}
