import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-hotel-verification-phase2',
  templateUrl: './hotel-verification-phase2.component.html',
  styleUrls: ['./hotel-verification-phase2.component.scss']
})
export class HotelVerificationPhase2Component implements OnInit {

  hotelid:any;
  constructor(
    private activatedroute : ActivatedRoute,
    private  router: Router
  ) { 
    this.activatedroute.paramMap.subscribe(params =>{
      this.hotelid=params.get('id')
      console.log(this.hotelid);
    })
  }

  ngOnInit(): void {
  }

  back(){
    console.log('back');
    this.router.navigateByUrl('')
  }

}
