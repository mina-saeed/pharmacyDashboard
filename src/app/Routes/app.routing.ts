import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {FlashMessagesModule } from 'angular2-flash-messages';
import { login } from '../Components/pharmacy/login.component';
import { forgotPass } from '../Components/forgotPass/forgotPass.component';
import { reset } from '../Components/forgetPassword/forgetPassword.component';
import { orders } from '../Components/orders/orders.component';
import { products } from '../Components/products/products.component';
import { newProduct } from '../Components/products/newProduct.component';
import { logout } from '../Components/pharmacy/logout.component';
import { newAds } from '../Components/ads/addAds.component'
import { Ads } from '../Components/ads/Ads.component'
import { updateAds } from '../Components/ads/updateAds.component'
import { users } from '../shared/users.service';
import { medicineService } from '../shared/medicines.service';
import { productService } from '../shared/products.service';
import { ValidateService } from '../shared/validate.service';
import { pharmacysignupComponent } from '../pharmacySignUp.component';
import { bar } from '../Components/products/bar.component';
import { pie } from '../Components/products/pie.component';
import { test } from '../Components/products/test';
import { AuthGuard } from '../guards/auth.guard';
import { AuthGuard1 } from '../guards/auth1.guard';
import {requestService} from '../shared/requests.service'
import {newMedicine} from '../Components/requests/newMedicine.component';
import {prices} from '../Components/medicinePrices/prices.component';
import {setPrice} from '../Components/medicinePrices/setPrice.component';

import {acceptOrder} from '../Components/orders/acceptOrder.component'
const componentRoutes: Routes = [

	{
		path: 'login',
		component: login,
		canActivate: [AuthGuard1],
	},
	{
		path: '',
		component: login,
		canActivate: [AuthGuard1],
	},
	{
		path: 'orders',
		component: orders,
		canActivate: [AuthGuard],
	},
	{
		path: 'products',
		component: products,
		canActivate: [AuthGuard],
	},
	{
		path: 'newproduct',
		component: newProduct,
		canActivate: [AuthGuard],
	},
	{
		path: 'pharmacysignup',
		component: pharmacysignupComponent
	},
	{
		path: 'logout',
		component: logout,
		canActivate: [AuthGuard],
	},

	{
		path: 'bar',
		component: bar,
		canActivate: [AuthGuard],
	},
	{
		path: 'pie',
		component: pie,
		canActivate: [AuthGuard],
	},
	{
		path: 'forgotPass',
		component: forgotPass,
		canActivate: [AuthGuard1],

	},
	{
		path: 'resetPassword/:email',
		component: reset,
		canActivate: [AuthGuard1],

	},
	{
		path: 'test',
		component: test
	},
	{
		path: 'addAds',
		component: newAds,
		canActivate: [AuthGuard]
	},
	{
		path: 'requestedAds',
		component: Ads,
		canActivate: [AuthGuard]
	},
	{
		path: 'updateAds',
		component: updateAds,
		canActivate: [AuthGuard]

	},
	{
		path: 'requestMedicine',
		component: newMedicine,
		canActivate: [AuthGuard]

	},
	{
		path: 'prices',
		component: prices,
		canActivate: [AuthGuard]

	},
	{
		path: 'setPrice',
		component: setPrice,
		canActivate: [AuthGuard]

	},
	{
		path: 'orderDetails',
		component: acceptOrder,
		canActivate: [AuthGuard]

	}				
]


@NgModule({

	imports: [
		RouterModule.forRoot(componentRoutes),FlashMessagesModule

	],
	providers: [users, ValidateService, medicineService, productService , requestService],
	exports: [
		RouterModule
	]
})
export class routes { }
export const RoutingComponents = [login, logout, orders, products, newProduct, pharmacysignupComponent, newAds, Ads
,updateAds,reset , newMedicine, prices, setPrice , acceptOrder]