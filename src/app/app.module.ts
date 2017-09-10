import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent } from './Components/app/app.component';
import {FlashMessagesModule } from 'angular2-flash-messages';
import {login} from './Components/pharmacy/login.component';
//import {forgotPass} from './Components/forgotPass/forgotPass.component';
//import {reset} from './Components/forgetPassword/forgetPassword.component';
import {orders} from './Components/orders/orders.component';
import {products} from './Components/products/products.component';
import {newProduct} from './Components/products/newProduct.component';
import {test} from './Components/products/test'; 
import {logout} from './Components/pharmacy/logout.component';
import {bar} from './Components/products/bar.component';
import {pie} from './Components/products/pie.component'
import {newAds} from './Components/ads/addAds.component'
import {Ads} from './Components/ads/Ads.component'
import {updateAds} from './Components/ads/updateAds.component'
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
import {Md5} from 'ts-md5/dist/md5';

import { NgxPaginationModule } from 'ngx-pagination';
import { Pipe, PipeTransform } from '@angular/core';
import { MainPipe } from './filter/filter.module'
import { EqualValidator } from './Components/pharmacy/password.match.directive';
import { Http} from '@angular/http';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { productDialog } from './Components/products/dialog.component'
import { adsDialog } from './Components/ads/adsDialog.component'
import { TruncatePipe } from 'angular2-truncate';
import {TranslateModule} from 'ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/src/translate.service';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
  }
@NgModule({
  declarations: [
    sidebar,
    topbar,
    AppComponent,
    products,
    orders,
    newProduct,
    TruncatePipe,
    productDialog,
    adsDialog,
    EqualValidator,
    RoutingComponents,
    [ login ,
      logout,
      orders ,
      products,
      newProduct,
      pharmacysignupComponent,
    //  forgotPass,
    //  reset,
      bar,
      pie,
      test,
      newAds,
      Ads,
      updateAds
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
    MainPipe,
    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }),
    ],

    entryComponents: [
      productDialog,
      adsDialog
    ],
  providers: [users,orderService,medicineService,productService,ValidateService,AuthGuard,AuthGuard1,Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
