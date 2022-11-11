import { TestBed } from '@angular/core/testing';

import { HttpRestFullService } from './http-rest-full.service';

describe('HttpRestFullService', () => {
  let service: HttpRestFullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRestFullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
