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
				component:orders
			},
			{
				path: 'products',
				component: products
			},
			{
				path: 'newproduct',
				component: newProduct
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
				component: bar
			},
			{
				path: 'pie',
				component: pie
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