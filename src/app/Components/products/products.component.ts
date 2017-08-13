import {Component , OnInit} from '@angular/core'
import {productService} from '../../shared/products.service'

@Component({
	templateUrl:'products.component.html',
	providers:[productService]
})

export class products implements OnInit{
	private products=[]
	constructor(private prod: productService){}
	ngOnInit(){
		this.prod.allProducts().subscribe(res=>{
			console.log(res)
				this.products = res
				return this.products
			})
	}
}