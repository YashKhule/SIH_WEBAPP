import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  dashon:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  dash(){

    this.dashon = true;

  }

}
