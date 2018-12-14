import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlearnerComponent } from './viewlearner.component';

describe('ViewlearnerComponent', () => {
  let component: ViewlearnerComponent;
  let fixture: ComponentFixture<ViewlearnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlearnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
