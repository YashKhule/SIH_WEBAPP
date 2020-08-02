import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashComponent } from './dash/dash.component';
import { CountComponent } from './count/count.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { HotelVerificationComponent } from './hotel-verification/hotel-verification.component';
import { LocationVerificationComponent } from './location-verification/location-verification.component';
import { HotelVerificationPhase2Component } from './hotel-verification-phase2/hotel-verification-phase2.component';
import { LocationVerificationPhase3Component } from './location-verification-phase3/location-verification-phase3.component';
import { HotelVerificationPhase1Component } from './hotel-verification-phase1/hotel-verification-phase1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DashComponent,
    CountComponent,
    FeedbackComponent,
    LoginComponent,
    HotelVerificationComponent,
    LocationVerificationComponent,
    HotelVerificationPhase2Component,
    LocationVerificationPhase3Component,
    HotelVerificationPhase1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
