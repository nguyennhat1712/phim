import { TestBed, inject } from '@angular/core/testing';

import { TransfromDataService } from './transfrom-data.service';

describe('TransfromDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransfromDataService]
    });
  });

  it('should be created', inject([TransfromDataService], (service: TransfromDataService) => {
    expect(service).toBeTruthy();
  }));
});
