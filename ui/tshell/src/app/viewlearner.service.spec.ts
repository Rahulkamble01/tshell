import { TestBed } from '@angular/core/testing';

import { ViewlearnerService } from './viewlearner.service';

describe('ViewlearnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewlearnerService = TestBed.get(ViewlearnerService);
    expect(service).toBeTruthy();
  });
});
