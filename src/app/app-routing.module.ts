import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashComponent } from './dash/dash.component';
import { CountComponent } from './count/count.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HotelVerificationPhase1Component } from './hotel-verification-phase1/hotel-verification-phase1.component';
import { HotelVerificationPhase2Component } from './hotel-verification-phase2/hotel-verification-phase2.component';

const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'dash',component:DashComponent},
  {path:'count',component:CountComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'hotel-phase1/:id',component:HotelVerificationPhase1Component},
  {path:'hotel-phase2',component:HotelVerificationPhase2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
