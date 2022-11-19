import { TestBed } from '@angular/core/testing';

import { QuestionHttpService } from './question-http.service';

describe('QuestionHttpService', () => {
  let service: QuestionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
