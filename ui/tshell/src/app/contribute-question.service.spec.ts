import { TestBed } from '@angular/core/testing';

import { ContributeQuestionService } from './contribute-question.service';

describe('ContributeQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContributeQuestionService = TestBed.get(ContributeQuestionService);
    expect(service).toBeTruthy();
  });
});
