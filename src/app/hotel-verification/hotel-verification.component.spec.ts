import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelVerificationComponent } from './hotel-verification.component';

describe('HotelVerificationComponent', () => {
  let component: HotelVerificationComponent;
  let fixture: ComponentFixture<HotelVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
