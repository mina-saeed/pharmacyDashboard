import { Component, OnInit,OnDestroy } from '@angular/core';
import { orderService }       from '../../shared/orders.service';
import { Router } from '@angular/router'
import {sidebar} from '../sidebar/sidebar.component'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Http , RequestOptions, Headers} from '@angular/http';


@Component({
	templateUrl: 'acceptOrder.component.html',
	providers: [orderService]
})

export class acceptOrder implements OnInit {
private ordderDetails
  constructor(private order:orderService ,private http:Http, private router: Router) { }

  ngOnInit(){
console.log(acceptOrder.getCookie('order'))
this.ordderDetails = JSON.parse(acceptOrder.getCookie('order'))
  	
  }
	public static  getCookie(name: string) {
		let ca: Array<string> = document.cookie.split(';');
		let caLen: number = ca.length;
		let cookieName = `${name}=`;
		let c: string;

		for (let i: number = 0; i < caLen; i += 1) {
	    	c = ca[i].replace(/^\s+/g, '');
	    	if (c.indexOf(cookieName) == 0) {
	        	return c.substring(cookieName.length, c.length);
	    	}
		}
		return '';
	}
confirm(order){
let orderString = JSON.stringify(order)	

let orderMedicines = this.ordderDetails.order
let  result= orderString.replace(/[{()}]/g, '');
let medicines= []



medicines = JSON.parse(JSON.stringify(result.split(',')))

orderMedicines.forEach(function(orderMedicine){

	medicines.forEach(function(newMedicinePrice){

		let tempMedicine = newMedicinePrice.split(':')
		let orderMedicineName = orderMedicine.name
		let newMedicinePriceName = tempMedicine[0].replace(/['"]+/g, '')
		let newMedicinePriceValue = tempMedicine[1].replace(/['"]+/g, '')
//				console.log("My medicine: "+newMedicinePriceName+ "---- "+"Order Medicine : "+orderMedicineName)	
				if(orderMedicineName == newMedicinePriceName && orderMedicine.price==0){
			
	
			orderMedicine.price= newMedicinePriceValue
		}
	})

})
console.log(this.ordderDetails)

this.order.confirmOrder(this.ordderDetails).subscribe(res=>{
	if(res.status==409){
		alert(" Sorry , Another pharmacy confirmed this order ")
		this.router.navigate(['/orders'])
	}
	else{
		this.router.navigate(['/orders'])
	}

	
})
}	  
}
