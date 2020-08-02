import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from '../dash/dash.component';
import { CountComponent } from '../count/count.component';
import { FeedbackComponent } from '../feedback/feedback.component'; 

const routes: Routes = [
  
  {path:'dash',component:DashComponent},
  {path:'count',component:CountComponent},
  {path:'feedback',component:FeedbackComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MainpageModule { }
