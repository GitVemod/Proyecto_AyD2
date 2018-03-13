import { TestBed, inject } from '@angular/core/testing';

import { CuentaServiceService } from './cuenta-service.service';

describe('CuentaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuentaServiceService]
    });
  });

  it('should be created', inject([CuentaServiceService], (service: CuentaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
