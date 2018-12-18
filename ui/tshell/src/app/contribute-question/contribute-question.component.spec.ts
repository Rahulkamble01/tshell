import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeQuestionComponent } from './contribute-question.component';

describe('ContributeQuestionComponent', () => {
  let component: ContributeQuestionComponent;
  let fixture: ComponentFixture<ContributeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
