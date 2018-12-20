import { TestBed } from '@angular/core/testing';

import { SkillserviceService } from './skillservice.service';

describe('SkillserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillserviceService = TestBed.get(SkillserviceService);
    expect(service).toBeTruthy();
  });
});
