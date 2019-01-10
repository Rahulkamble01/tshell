import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceskillComponent } from './referenceskill.component';

describe('ReferenceskillComponent', () => {
  let component: ReferenceskillComponent;
  let fixture: ComponentFixture<ReferenceskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
