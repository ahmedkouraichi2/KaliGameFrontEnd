import { TestBed } from '@angular/core/testing';

import { RegleServiceService } from './regle-service.service';

describe('RegleServiceService', () => {
  let service: RegleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
