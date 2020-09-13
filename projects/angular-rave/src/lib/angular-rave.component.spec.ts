import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularRaveComponent } from './angular-rave.component';
import { AngularRaveService } from './angular-rave.service';
import { PUBKEY_TOKEN } from './angular-rave-token';

describe('AngularRaveComponent', () => {
  let component: AngularRaveComponent;
  let fixture: ComponentFixture<AngularRaveComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [ AngularRaveComponent ],
      providers: [
        AngularRaveService,
        { provide: PUBKEY_TOKEN, useValue: 'public_key' },
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
