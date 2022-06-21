import { TestBed } from '@angular/core/testing';

import { ProcessorServiceService } from './processor-service.service';

describe('ProcessorServiceService', () => {
  let service: ProcessorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
