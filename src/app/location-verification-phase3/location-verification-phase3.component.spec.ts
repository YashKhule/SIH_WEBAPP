import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVerificationPhase3Component } from './location-verification-phase3.component';

describe('LocationVerificationPhase3Component', () => {
  let component: LocationVerificationPhase3Component;
  let fixture: ComponentFixture<LocationVerificationPhase3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationVerificationPhase3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationVerificationPhase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
