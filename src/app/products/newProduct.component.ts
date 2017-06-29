import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {productService} from '../shared/products.service'
@Component({

	templateUrl: 'newProduct.component.html',
	providers:[productService]
})

export class newProduct{
	constructor(private product: productService, private router: Router){}
	addProduct(productForm){
		this.product.addProduct(productForm).subscribe(res=>{
		if(res){
			this.router.navigate(['/products'])
		}
	})
	}
}