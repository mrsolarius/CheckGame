import { TestBed } from '@angular/core/testing';
import {Board, countSelectedCells, getBoardFromString} from "./checkers.data";

describe('CheckersData', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  describe('Test getBoardFromString()', () => {
    it('should return a board from a string', () => {
        const board=getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ···N······
                                        ···X······
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
        expect(board).toEqual([
            ["Empty","Black","Empty", "Black","Empty","Black","Empty","Black","Empty","Black"],
            ["Black","Empty","Black","Empty","Black","Empty","Black","Empty","Black","Empty"],
            ["Empty","Black","Empty","Black","Empty","Black","Empty","Black","Empty","Black"],
            ["Black","Empty","Black","Empty","Black","Empty","Black","Empty","Black","Empty"],
            ["Empty","Empty","Empty","BlackKing","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","WhiteKing","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["White","Empty","White","Empty","White","Empty","White","Empty","White","Empty"],
            ["Empty","White","Empty","White","Empty","White","Empty","White","Empty","White"],
            ["White","Empty","White","Empty","White","Empty","White","Empty","White","Empty"],
            ["Empty","White","Empty","White","Empty","White","Empty","White","Empty","White"]
          ]
        )
    });

    it('should return Too many character error', () => {
        const board=getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ··········
                                        ··········
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
        expect(board).toEqual({error:'Too many character'});
    });

    it('should return Unknown character error',()=>{
      const board=getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ···A······
                                        ···o······
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
      expect(board).toEqual({error:'Unknown character'})
    })
  });

  describe('Test countSelectedCells()',()=>{
    it('should count 40 black and white pieces',()=>{
      const board=getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ··········
                                        ··········
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
      const num = countSelectedCells(<Board>board,'White','Black');
      expect(num).toBe(40);
    });

    it('should count 2 black and white king pieces',()=>{
      const board=getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ···N······
                                        ···X······
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
      const num = countSelectedCells(<Board>board,'WhiteKing','BlackKing');
      expect(num).toBe(2);
    });

    it('should count 20 black pieces',()=>{
      const board=getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ···N······
                                        ···X······
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
      const num = countSelectedCells(<Board>board,'Black');
      expect(num).toBe(20);
    });

    it('should count 20 white pieces',()=>{
      const board=getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ···N······
                                        ···X······
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
      const num = countSelectedCells(<Board>board,'White');
      expect(num).toBe(20);
    });

    it('should count 100 case',()=>{
      const board=getBoardFromString(`
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ·B·B·B·B·B
                                        B·B·B·B·B·
                                        ···N······
                                        ···X······
                                        W·W·W·W·W·
                                        ·W·W·W·W·W
                                        W·W·W·W·W·
                                        ·W·W·W·W·W`);
      const num = countSelectedCells(<Board>board,'White','WhiteKing','BlackKing','Black',"Empty");
      expect(num).toBe(100);
    });
  });
});
