import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  dashon:boolean = true;
  counton:boolean = false;
  feedbackon:boolean = false;
  hotelon:boolean = false;
  locationon:boolean = false;
  rate1=5;
  rate2=4;
  rate3=5;
  rate4=3;
  rate5=4;
  highest_count=8329098398;
  lowest_count=7057308406;
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  dash(){
    this.dashon = true;
    this.counton = false;
    this.feedbackon = false;
  }
  count(){
    this.dashon = false;
    this.counton = true;
    this.feedbackon = false;

  }
  feedback(){
    this.dashon = false;
    this.counton = false;
    this.feedbackon = true;
  }

  hotelverification(){
    this.dashon = false;
    this.counton = false;
    this.feedbackon = false;
    this.hotelon = true;
    this.locationon=false;
  }

  locationverification(){
    this.dashon = false;
    this.counton = false;
    this.feedbackon = false;
    this.hotelon = false;
    this.locationon=true;
  }

  logout(){
    console.log("logout")
  }
}
