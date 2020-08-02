import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-hotel-verification-phase1',
  templateUrl: './hotel-verification-phase1.component.html',
  styleUrls: ['./hotel-verification-phase1.component.scss']
})
export class HotelVerificationPhase1Component implements OnInit {
stateid:any;
  constructor(private activatedroute:ActivatedRoute,
    private router : Router) { 
    this.activatedroute.paramMap.subscribe(params =>{
      this.stateid=params.get('id')
      console.log(this.stateid);
    })
  }

  ngOnInit(): void {
  }

  getData(){
    
  }

  back(){
    console.log('back');
    this.router.navigateByUrl('')
  }

}
