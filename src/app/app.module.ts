import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent } from './app.component';
import {FlashMessagesModule } from 'angular2-flash-messages';
import {login} from './pharmacy/login.component';
import {orders} from './orders/orders.component';
import {products} from './products/products.component';
import {newProduct} from './products/newProduct.component';
import {test} from './products/test'; 
import {logout} from './pharmacy/logout.component';
import {bar} from './products/bar.component';
import {pie} from './products/pie.component'
import {pharmacysignupComponent} from './pharmacySignUp.component';
import {routes, RoutingComponents} from './Routes/app.routing';
import {RouterModule ,Routes} from '@angular/router'
import {sidebar} from './sidebar/sidebar.component';
import {users} from './shared/users.service';
import {ValidateService} from './shared/validate.service';
import {AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {ChartsModule } from 'ng2-charts';
import {QRCodeModule } from 'angular2-qrcode';
import {AuthGuard} from './guards/auth.guard';
import {AuthGuard1} from './guards/auth1.guard';

@NgModule({
  declarations: [
    sidebar,
    AppComponent,
    products,
    orders,
    newProduct,
    RoutingComponents,
    [ login ,
      logout,
      orders ,
      products,
      newProduct,
      pharmacysignupComponent,
      bar,
      pie,
      test,
    ]

  ],
  imports: [
    BrowserModule, 
    FormsModule , 
    HttpModule,
    routes,
    FlashMessagesModule,
    AngularMultiSelectModule,
    ChartsModule,
    QRCodeModule,
    
    ],
  providers: [users,ValidateService,AuthGuard,AuthGuard1],
  bootstrap: [AppComponent]
})
export class AppModule { }
