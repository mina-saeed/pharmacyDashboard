import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {pharmacy} from './pharmacySignUp.component'

@NgModule({
  declarations: [
    pharmacy
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [pharmacy]
})
export class AppModule { }
