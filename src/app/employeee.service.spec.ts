import { TestBed, inject } from '@angular/core/testing';

import { EmployeeeService } from './employeee.service';

describe('EmployeeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeeService]
    });
  });

  it('should be created', inject([EmployeeeService], (service: EmployeeeService) => {
    expect(service).toBeTruthy();
  }));
});
