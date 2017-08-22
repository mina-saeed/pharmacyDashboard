import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent } from './Components/app/app.component';
import {FlashMessagesModule } from 'angular2-flash-messages';
import {login} from './Components/pharmacy/login.component';
import {forgotPass} from './Components/forgotPass/forgotPass.component';
import {ForgetPasswordUserComponent} from './Components/forgetPassword/forgetPassword.component';
import {orders} from './Components/orders/orders.component';
import {products} from './Components/products/products.component';
import {newProduct} from './Components/products/newProduct.component';
import {test} from './Components/products/test'; 
import {logout} from './Components/pharmacy/logout.component';
import {bar} from './Components/products/bar.component';
import {pie} from './Components/products/pie.component'
import {pharmacysignupComponent} from './pharmacySignUp.component';
import {routes, RoutingComponents} from './Routes/app.routing';
import {RouterModule ,Routes} from '@angular/router'
import {sidebar} from './Components/sidebar/sidebar.component';
import {topbar} from './Components/topbar/topbar.component';
import {users} from './shared/users.service';
import {orderService} from './shared/orders.service';
import {productService} from './shared/products.service';
import {medicineService} from './shared/medicines.service';
import {ValidateService} from './shared/validate.service';
import {AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {ChartsModule } from 'ng2-charts';
import {QRCodeModule } from 'angular2-qrcode';
import {AuthGuard} from './guards/auth.guard';
import {AuthGuard1} from './guards/auth1.guard';
import { EqualTextValidator } from "angular2-text-equality-validator";
import {Md5} from 'ts-md5/dist/md5';
//import {EqualTextValidator} from './password.match.directive';

import { NgxPaginationModule } from 'ngx-pagination';
import { Pipe, PipeTransform } from '@angular/core';
import { MainPipe } from './filter/filter.module'

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { productDialog } from './Components/products/dialog.component'
import { TruncatePipe } from 'angular2-truncate';

@NgModule({
  declarations: [
    sidebar,
    topbar,
    EqualTextValidator,
    AppComponent,
    products,
    orders,
    newProduct,
    TruncatePipe,
    productDialog,
    RoutingComponents,
    [ login ,
      logout,
      orders ,
      products,
      newProduct,
      pharmacysignupComponent,
      forgotPass,
      ForgetPasswordUserComponent,
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
    BootstrapModalModule,
    NgxPaginationModule, 
    MainPipe
    ],

    entryComponents: [
      productDialog
    ],
  providers: [users,orderService,medicineService,productService,ValidateService,AuthGuard,AuthGuard1,Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
