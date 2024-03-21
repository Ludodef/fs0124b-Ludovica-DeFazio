import { TestBed } from '@angular/core/testing';

import { AricoliService } from './aricoli.service';

describe('AricoliService', () => {
  let service: AricoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AricoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
