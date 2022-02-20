import {TestBed} from '@angular/core/testing';

import {CheckersService} from './checkers.service';
import {Board, Board_RO, getBoardFromString, getInitialGameState} from "./checkers.data";

describe('CheckersService', () => {
  let service: CheckersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Test of initialize(board: Board, turn:Turn): InitializeReturns
   */
  describe('Test initialize() Methode', () => {
    describe('Errors', () => {
      describe('Must contain at least one piece',()=>{
        it('should return Must contain at least one piece when board is fully empty',()=>{
          const board = getBoardFromString(`
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Must contain at least one piece'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });
      });

      describe('Too many pieces', () => {
        it('should return to many pieces error with 21 black regular pieces', () => {
          const board = getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B········
                                        ··········
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Too many pieces'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should return to many pieces error with 21 black and black king pieces', () => {
          const board = getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·N·B·B
                                        B·B·B·B·B·
                                        ·N········
                                        ··········
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Too many pieces'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should return to many pieces error with 21 white regular pieces', () => {
          const board = getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ··········
                                        ··········
                                        B·B·B·B·B·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
          const init = service.initialize(<Board>board, 'Black');
          expect(init).toEqual({error: 'Too many pieces'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should return to many pieces error with 21 white and white king pieces', () => {
          const board = getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ··········
                                        ·········X
                                        W·W·W·W·W·
                                        ·W·X·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
          const init = service.initialize(<Board>board, 'Black');
          expect(init).toEqual({error: 'Too many pieces'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should rerun to many pieces error with 40 white pieces', () => {
          const board = getBoardFromString(`
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ··········
                                        ··········
                                        X·X·X·X·X·
                                        ·X·X·X·X·X
                                        X·X·X·X·X·
                                        ·X·X·X·X·X`);
          const init = service.initialize(<Board>board, 'Black');
          expect(init).toEqual({error: 'Too many pieces'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should return to many pieces error with 40 black pieces', () => {
          const board = getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ··········
                                        ··········
                                        N·N·N·N·N·
                                        ·N·N·N·N·N
                                        N·N·N·N·N·
                                        ·N·N·N·N·N`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Too many pieces'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });
      });

      describe('Invalid pieces placement', () => {
        it('should return invalid pieces placement error if one Black pieces is not align in grid', () => {
          const board = getBoardFromString(`
                                        B·········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Invalid pieces placement'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should return invalid pieces placement error if one White pieces is not align in grid', () => {
          const board = getBoardFromString(`
                                        W·········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Invalid pieces placement'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should return invalid pieces placement error if one Black King pieces is not align in grid', () => {
          const board = getBoardFromString(`
                                        N·········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Invalid pieces placement'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should return invalid pieces placement error if one White King pieces is not align in grid', () => {
          const board = getBoardFromString(`
                                        X·········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Invalid pieces placement'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should return invalid pieces placement error if the initial placement of pieces is inverted', () => {
          const board = getBoardFromString(`
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        ··········
                                        ··········
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Invalid pieces placement'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });
      });

      describe('Some pieces should be king', () => {
        it('should return Some pieces should be king error if one Black pieces is at his opposite side', () => {
          const board = getBoardFromString(`
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ·····B····`);
          const init = service.initialize(<Board>board, 'White');
          expect(init).toEqual({error: 'Some pieces should be king'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });

        it('should return Some pieces should be king error if one White pieces is at his opposite side', () => {
          const board = getBoardFromString(`
                                        ···W······
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········
                                        ··········`);
          const init = service.initialize(<Board>board, 'Black');
          expect(init).toEqual({error: 'Some pieces should be king'});
          expect(service.board).toEqual(getInitialGameState().board);
          expect(service.turn).toEqual(getInitialGameState().turn);
        });
      });
    });
    describe('Will be initialize', () => {
      it('should be initialize with this configuration', () => {
        const board = getBoardFromString(`
                                        ·X·····B·B
                                        ······B···
                                        ·B···B···B
                                        B·N···B·B·
                                        ·B···W····
                                        ··········
                                        ·····W····
                                        ······W··W
                                        ·W·····W··
                                        ········W·`);
        const init = service.initialize(<Board>board, 'Black');
        expect(init).toBe(null);
        expect(service.board).toEqual(<Board_RO>board);
        expect(service.turn).toEqual('Black');
      });
    });
  });


  /**
   * Test of whereCanPlay(from: TileCoords): WhereCanPlayReturns
   */
  describe('Test whereCanPlay() Methode', () => {
    describe('Errors', () => {
      describe('Out of range', () => {

      });
      describe('No piece', () => {

      });
    });
    describe('Will be return the list of possible moves', () => {

    });
  });


  /**
   * Test of playMove(from: TileCoords, to: TileCoords): PlayReturns
   */
  describe('Test playMove() Methode', () => {
    describe('Errors', () => {
      describe('Out of range', () => {

      });
      describe('No piece', () => {

      });
      describe('Not your turn', () => {

      });
      describe('Can not move', () => {

      });
    });
    describe('Will be return play the move', () => {

    });
  });

  /**
   * Test of winner(): Win
   */
  describe('Test winner() Methode', () => {
    describe('Will be return Black winner', () => {

    });
    describe('Will be return White winner', () => {

    });
    describe('Will be return Equality', () => {

    });
    describe('Will be return no winner', () => {

    });
  });
});
