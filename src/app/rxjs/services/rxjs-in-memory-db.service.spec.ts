import { TestBed, inject } from '@angular/core/testing';

import { RxjsInMemoryDbService } from './rxjs-in-memory-db.service';

describe('RxjsInMemoryDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsInMemoryDbService]
    });
  });

  it('should be created', inject([RxjsInMemoryDbService], (service: RxjsInMemoryDbService) => {
    expect(service).toBeTruthy();
  }));
});
