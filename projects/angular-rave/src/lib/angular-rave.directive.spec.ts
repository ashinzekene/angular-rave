import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRaveComponent } from './angular-rave.component';
import { AngularRaveService } from './angular-rave.service';
import { PBFPUBKEY_TOKEN, ENVIRONMENT_TOKEN } from './angular-rave-token';

describe('AngularRaveComponent', () => {
  let component: AngularRaveComponent;
  let fixture: ComponentFixture<AngularRaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRaveComponent ],
      providers: [
        AngularRaveService,
        { provide: PBFPUBKEY_TOKEN, useValue: 'PBFPubKey' },
        { provide: ENVIRONMENT_TOKEN, useValue: true }
      ]
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
