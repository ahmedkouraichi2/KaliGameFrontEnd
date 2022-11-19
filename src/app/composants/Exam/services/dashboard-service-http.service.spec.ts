import { TestBed } from '@angular/core/testing';

import { DashboardServiceHttpService } from './dashboard-service-http.service';

describe('DashboardServiceHttpService', () => {
  let service: DashboardServiceHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardServiceHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
