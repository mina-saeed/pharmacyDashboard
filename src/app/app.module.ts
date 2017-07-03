import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {login} from './pharmacy/login.component';
import {orders} from './orders/orders.component';
import {products} from './products/products.component';
import {newProduct} from './products/newProduct.component';
import {logout} from './pharmacy/logout.component';
import {pharmacysignupComponent} from './pharmacySignUp.component';
import {routes, RoutingComponents} from './Routes/app.routing';
import {users} from './shared/users.service';
import {ValidateService} from './shared/validate.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    [ login ,
      logout,
      orders ,
      products,
      newProduct,
      pharmacysignupComponent
    ]

  ],
  imports: [
    BrowserModule, FormsModule , HttpModule, routes,FlashMessagesModule
    ],
  providers: [users,ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
