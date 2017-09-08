import { Component, OnInit, ViewChild } from '@angular/core'
import { requestService } from '../../shared/requests.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { DialogService } from "ng2-bootstrap-modal";
import { productDialog } from './dialog.component';

@Component({
	templateUrl: 'setPrice.component.html',
	providers: [requestService]
})

export class setPrice implements OnInit {

	constructor(private dialogService: DialogService, private prices: requestService, private router: Router, private flashMessage: FlashMessagesService) { }
	ngOnInit() {
/*		this.prod.allProducts().subscribe(res => {
			console.log(res)
			this.products = res
			return this.products
		})*/
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
/*	show(product) {
		this.dialogService.addDialog(productDialog, {
			name_en: product.name_en, description_en: product.description_en, price: product.price,
			category: product.category, pharmacyID: product.pharmacyID, barcode: product.barcode, image: product.ProductImage
		});

	}*/
}