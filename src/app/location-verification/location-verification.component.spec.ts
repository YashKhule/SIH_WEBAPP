import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVerificationComponent } from './location-verification.component';

describe('LocationVerificationComponent', () => {
  let component: LocationVerificationComponent;
  let fixture: ComponentFixture<LocationVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
