import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  //mediaSubscription: Subscription = new Subscription();

  constructor(public mediaObserver: MediaObserver) {
  }

  ngOnInit(): void {
    /*
        this.mediaSubscription = this.mediaObserver
          .asObservable()
          .subscribe( value => {
          console.log(value);
        })*/
  }

  ngOnDestroy() {
    /*if(this.mediaSubscription) {
      this.mediaSubscription.unsubscribe();
      }
    }*/
  }
}
