import { TestBed } from '@angular/core/testing';

import { OuterGuardService } from './outer-guard.service';

describe('OuterGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuterGuardService = TestBed.get(OuterGuardService);
    expect(service).toBeTruthy();
  });
});
