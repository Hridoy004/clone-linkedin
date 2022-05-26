import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLandingRoutingModule } from './app-landing-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppLandingRoutingModule
  ]
})
export class AppLandingModule { }
