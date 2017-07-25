import {NgModule} from '@angular/core'
import {RouterModule ,Routes} from '@angular/router'

import {login} from '../pharmacy/login.component';
import {orders} from '../orders/orders.component';
import {products} from '../products/products.component';
import {newProduct} from '../products/newProduct.component';
import {logout} from '../pharmacy/logout.component';
import {users} from '../shared/users.service';

import {ValidateService} from '../shared/validate.service';
import {pharmacysignupComponent} from '../pharmacySignUp.component';
import {bar} from '../products/bar.component'; 
import {pie} from '../products/pie.component';
import {test} from '../products/test'; 
import {AuthGuard} from '../guards/auth.guard';
const componentRoutes: Routes =[
	
			{
				path:'login',
				component:login
			},
			{
				path:'',
				component:login
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
				component: logout
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
	providers: [users,ValidateService],
	exports:[
		RouterModule
	]
})
export class routes{}
export const RoutingComponents =[login , logout, orders , products , newProduct,pharmacysignupComponent]