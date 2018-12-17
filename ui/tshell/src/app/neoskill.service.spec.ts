import { TestBed } from '@angular/core/testing';

import { NeoskillService } from './neoskill.service';

describe('NeoskillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeoskillService = TestBed.get(NeoskillService);
    expect(service).toBeTruthy();
  });
});
