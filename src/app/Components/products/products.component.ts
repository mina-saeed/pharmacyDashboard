import { Component, OnInit, ViewChild } from '@angular/core'
import { productService } from '../../shared/products.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { DialogService } from "ng2-bootstrap-modal";
import { productDialog } from './dialog.component';
import {TranslateService} from 'ng2-translate';

@Component({
	templateUrl: 'products.component.html',
	providers: [productService]
})

export class products implements OnInit {
	private products = []
	p: number = 1;
	constructor(translate: TranslateService,private dialogService: DialogService, private prod: productService, private router: Router, private flashMessage: FlashMessagesService) { 
	    //translate.use('en');
}
	ngOnInit() {
		this.prod.allProducts().subscribe(res => {
			console.log(res)
			this.products = res
			return this.products
		})
	}

	/*delete(id,index) {
		this.prod.deleteProduct(id).subscribe(res => {
			if (res == 200) {				
				window.scroll(0,0)
				this.flashMessage.show('Product deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
						this.products.splice(index, 1)
						return this.products;
			}
		});
	}

	update(product) {
		this.prod.store(product)
		this.router.navigate(['/updateProduct']);
	}
*/
	show(product) {
		this.dialogService.addDialog(productDialog, {
			name_en: product.name_en, description_en: product.description_en, price: product.price,
			category: product.category, pharmacyID: product.pharmacyID, barcode: product.barcode, image: product.ProductImage
		});

	}
}