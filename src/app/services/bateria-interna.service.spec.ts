import { TestBed } from '@angular/core/testing';

import { BateriaInternaService } from './bateria-interna.service';

describe('BateriaInternaService', () => {
  let service: BateriaInternaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BateriaInternaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
