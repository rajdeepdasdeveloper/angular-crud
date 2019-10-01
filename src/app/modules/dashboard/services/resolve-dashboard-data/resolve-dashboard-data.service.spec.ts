import { TestBed } from '@angular/core/testing';

import { ResolveDashboardDataService } from './resolve-dashboard-data.service';

describe('ResolveDashboardDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveDashboardDataService = TestBed.get(ResolveDashboardDataService);
    expect(service).toBeTruthy();
  });
});
