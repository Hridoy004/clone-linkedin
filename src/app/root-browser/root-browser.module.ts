import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RootDefaultComponent
  ],
    imports: [
        BrowserModule,
        RootBrowserRoutingModule,
        MatButtonModule
    ],
  bootstrap: [RootDefaultComponent]
})
export class RootBrowserModule { }
