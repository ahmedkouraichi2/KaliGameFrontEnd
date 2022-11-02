import { TestBed } from '@angular/core/testing';

import { LangageServiceHttpService } from './langage-service-http.service';

describe('LangageServiceHttpService', () => {
  let service: LangageServiceHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangageServiceHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
