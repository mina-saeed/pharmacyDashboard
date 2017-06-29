import {NgModule} from '@angular/core'
import {RouterModule ,Routes} from '@angular/router'

import {login} from '../pharmacy/login.component'
import {orders} from '../orders/orders.component'
import {products} from '../products/products.component'
import {newProduct} from '../products/newProduct.component'
import {logout} from '../pharmacy/logout.component'
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
				path: 'logout',
				component: logout
			}			
		]


@NgModule({

	imports:[
		RouterModule.forRoot(componentRoutes)
	],
	exports:[
		RouterModule
	]
})
export class routes{}
export const RoutingComponents =[login , logout, orders , products , newProduct]