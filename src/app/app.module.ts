import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { admin } from './adminSignUp.component'

@NgModule({
  declarations: [
    admin
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [admin]
})
export class AppModule { }
