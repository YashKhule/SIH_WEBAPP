import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelVerificationPhase2Component } from './hotel-verification-phase2.component';

describe('HotelVerificationPhase2Component', () => {
  let component: HotelVerificationPhase2Component;
  let fixture: ComponentFixture<HotelVerificationPhase2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelVerificationPhase2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelVerificationPhase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
