import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {routes, RoutingComponents} from './Routes/app.routing'

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents

  ],
  imports: [
    BrowserModule, FormsModule , HttpModule, routes,FlashMessagesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
