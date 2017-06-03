import { TestBed, inject } from '@angular/core/testing';

import { BibleAPIService } from './bible-api.service';

describe('BibleAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibleAPIService]
    });
  });

  it('should be created', inject([BibleAPIService], (service: BibleAPIService) => {
    expect(service).toBeTruthy();
  }));
});
