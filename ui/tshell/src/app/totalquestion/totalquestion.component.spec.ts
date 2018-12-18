import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalquestionComponent } from './totalquestion.component';

describe('TotalquestionComponent', () => {
  let component: TotalquestionComponent;
  let fixture: ComponentFixture<TotalquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
