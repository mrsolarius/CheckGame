import { TestBed } from '@angular/core/testing';

import { CheckersService } from './checkers.service';
import {Board_RO} from "./checkers.data";

describe('CheckersService', () => {
  let service: CheckersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    service.board = [
      ['White','Empty','White','Empty','White','Empty','White','Empty','White','Empty'],
      ['Empty','White','Empty','White','Empty','White','Empty','White','White','Empty'],
      ['White','Empty','White','Empty','White','Empty','White','Empty','White','Empty'],
      ['Empty','White','Empty','White','Empty','White','Empty','White','White','Empty'],
      ['White','Empty','White','Empty','White','Empty','White','Empty','White','Empty'],
      ['Empty','White','Empty','White','Empty','White','Empty','White','White','Empty'],
      ['White','Empty','White','Empty','White','Empty','White','Empty','White','Empty'],
      ['Empty','White','Empty','White','Empty','White','Empty','White','White','Empty'],
      ['White','Empty','White','Empty','White','Empty','White','Empty','White','Empty'],
      ['Empty','White','Empty','White','Empty','White','Empty','White','White','Empty'],
    ]
  });
});
