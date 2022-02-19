import { TestBed } from '@angular/core/testing';

import { CheckersService } from './checkers.service';

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
  describe('Test initialize() Methode',()=>{
    describe('Errors',()=>{
      describe('Too many pieces',()=>{

      });
      describe('Invalid pieces placement',()=>{

      });
    });
    describe('Will be initialize',()=>{

    });
  });


  /**
   * Test of whereCanPlay(from: TileCoords): WhereCanPlayReturns
   */
  describe('Test whereCanPlay() Methode',()=>{
    describe('Errors',()=>{
      describe('Out of range',()=>{

      });
      describe('No piece',()=>{

      });
    });
    describe('Will be return the list of possible moves',()=>{

    });
  });


  /**
   * Test of playMove(from: TileCoords, to: TileCoords): PlayReturns
   */
  describe('Test playMove() Methode',()=>{
    describe('Errors',()=>{
      describe('Out of range',()=>{

      });
      describe('No piece',()=>{

      });
      describe('Not your turn',()=>{

      });
      describe('Can not move',()=>{

      });
    });
    describe('Will be return play the move',()=>{

    });
  });

  /**
   * Test of winner(): Win
   */
  describe('Test winner() Methode',()=>{
    describe('Will be return Black winner',()=>{

    });
    describe('Will be return White winner',()=>{

    });
    describe('Will be return Equality',()=>{

    });
    describe('Will be return no winner',()=>{

    });
  });
});
