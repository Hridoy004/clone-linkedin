import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppLandingRoutingModule} from './app-landing-routing.module';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    LandingPageComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppLandingRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AppLandingModule {
}
