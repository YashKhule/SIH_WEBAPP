import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelVerificationPhase1Component } from './hotel-verification-phase1.component';

describe('HotelVerificationPhase1Component', () => {
  let component: HotelVerificationPhase1Component;
  let fixture: ComponentFixture<HotelVerificationPhase1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelVerificationPhase1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelVerificationPhase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
