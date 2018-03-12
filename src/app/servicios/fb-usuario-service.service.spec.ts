import { TestBed, inject } from '@angular/core/testing';

import { FbUsuarioServiceService } from './fb-usuario-service.service';

describe('FbUsuarioServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbUsuarioServiceService]
    });
  });

  it('should be created', inject([FbUsuarioServiceService], (service: FbUsuarioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
