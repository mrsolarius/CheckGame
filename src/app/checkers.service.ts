import { Injectable } from '@angular/core';
import {Board_RO, GameState, GameStateInterface, playReturns, TileCoords, TileCoordsList, Turn, getInitialGameState} from "./checkers.data";
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

  get turn(): Turn {
    return this.gameStateSubject.value.turn;
  }

  get board(): Board_RO {
    return this.gameStateSubject.value.board;
  }

  get winner(): Turn | null{
    return null;
  };

  playMove(from: TileCoords, to: TileCoords): playReturns {
    return null;
  }

  whereCanPlay(from: TileCoords): TileCoordsList {
    return [];
  }
}
