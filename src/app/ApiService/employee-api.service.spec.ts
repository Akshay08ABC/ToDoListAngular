import { TestBed } from '@angular/core/testing';

import { EmployeeApiService } from './employee-api.service';

describe('EmployeeServiceService', () => {
  let service: EmployeeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
