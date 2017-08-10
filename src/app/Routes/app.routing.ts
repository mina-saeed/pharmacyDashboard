import {NgModule} from '@angular/core'
import {RouterModule ,Routes} from '@angular/router'

import {login} from '../Components/pharmacy/login.component';
import {orders} from '../Components/orders/orders.component';
import {products} from '../Components/products/products.component';
import {newProduct} from '../Components/products/newProduct.component';
import {logout} from '../Components/pharmacy/logout.component';
import {users} from '../shared/users.service';
import {medicineService} from '../shared/medicines.service';
import {productService} from '../shared/products.service';

import {ValidateService} from '../shared/validate.service';
import {pharmacysignupComponent} from '../pharmacySignUp.component';
import {bar} from '../Components/products/bar.component'; 
import {pie} from '../Components/products/pie.component';
import {test} from '../Components/products/test'; 
import {AuthGuard} from '../guards/auth.guard';
import {AuthGuard1} from '../guards/auth1.guard';
const componentRoutes: Routes =[
	
			{
				path:'login',
				component:login,
				canActivate: [AuthGuard1],
			},
			{
				path:'',
				component:login,
				canActivate: [AuthGuard1],
			},
			{
				path:'orders',
				component:orders,
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
				path: 'test',
				component: test
			}

		]


@NgModule({

	imports:[
		RouterModule.forRoot(componentRoutes),
		
	],
	providers: [users,ValidateService,medicineService, productService],
	exports:[
		RouterModule
	]
})
export class routes{}
export const RoutingComponents =[login , logout, orders , products , newProduct,pharmacysignupComponent]