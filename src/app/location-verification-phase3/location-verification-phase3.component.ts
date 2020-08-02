import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-location-verification-phase3',
  templateUrl: './location-verification-phase3.component.html',
  styleUrls: ['./location-verification-phase3.component.scss']
})
export class LocationVerificationPhase3Component implements OnInit {

  constructor(
    private activatedroute : ActivatedRoute,
    private  router: Router
  ) { }

  ngOnInit(): void {
  }
  back(){
    console.log('back');
    this.router.navigateByUrl('')
  }
}
