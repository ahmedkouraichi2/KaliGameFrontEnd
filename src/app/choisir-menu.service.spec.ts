import { TestBed } from '@angular/core/testing';

import { ChoisirMenuService } from './choisir-menu.service';

describe('ChoisirMenuService', () => {
  let service: ChoisirMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoisirMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
