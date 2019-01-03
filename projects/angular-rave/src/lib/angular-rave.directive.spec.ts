import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRaveComponent } from './angular-rave.component';

describe('AngularRaveComponent', () => {
  let component: AngularRaveComponent;
  let fixture: ComponentFixture<AngularRaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
