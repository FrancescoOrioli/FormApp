import { TestBed, inject } from '@angular/core/testing';

import { StudenteServiceService } from './studente-service.service';

describe('StudenteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudenteServiceService]
    });
  });

  it('should be created', inject([StudenteServiceService], (service: StudenteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
