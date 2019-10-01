import { TestBed } from '@angular/core/testing';

import { CrudUsersService } from './crud-users.service';

describe('CrudUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudUsersService = TestBed.get(CrudUsersService);
    expect(service).toBeTruthy();
  });
});
