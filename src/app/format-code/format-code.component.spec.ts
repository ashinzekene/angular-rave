import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatCodeComponent } from './format-code.component';

describe('FormatCodeComponent', () => {
  let component: FormatCodeComponent;
  let fixture: ComponentFixture<FormatCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
