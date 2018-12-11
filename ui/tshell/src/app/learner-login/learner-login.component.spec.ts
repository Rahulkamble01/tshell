import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerLoginComponent } from './learner-login.component';

describe('LearnerLoginComponent', () => {
  let component: LearnerLoginComponent;
  let fixture: ComponentFixture<LearnerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
