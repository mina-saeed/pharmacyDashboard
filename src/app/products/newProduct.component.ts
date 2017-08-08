import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {productService} from '../shared/products.service'
import {users} from '../shared/users.service'
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({

	templateUrl: 'newProduct.component.html',
	providers:[productService]
})

export class newProduct implements OnInit{
	email:String;
	barcode: string
	englishName: string
	arabicName: string
	englishDesc: string
	arabicDesc: string
	price: string
	category: string
	sub: string
	pharmacyID: string
	filesToUpload: Array<File> = [];
	constructor(private product: productService, private router: Router, private flash: FlashMessagesService){}
	ngOnInit() {}
	fileChange(event) 
	{
    	this.filesToUpload = <Array<File>>event.target.files;
	}
	addProduct(productForm)
	{
		if (this.filesToUpload.length> 0)
			 {
	 			const files: Array<File> = this.filesToUpload;
	  			const formData= new FormData();

      			formData.append("image", files[0], files[0]['name']);
	
		var name = {
		name_ar: this.arabicName,
		name_english: this.englishName
	}
	var description = {
		english_description: this.englishDesc,
		arabic_description: this.arabicDesc
	}
	//this.email=localStorage.getItem('email');
	formData.append('email',localStorage.getItem('email'));
	formData.append('name',this.englishName)
	formData.append('description',this.englishDesc)
	formData.append('price',this.price)
	formData.append('barcode',this.barcode)
	formData.append('category',this.category)
	formData.append('pharmacyID',this.pharmacyID)
		this.product.addProduct(formData).subscribe(res => {
			if (res) 
			{
				this.router.navigate(['/products'])
				this.flash.show('Product added Successfully', { cssClass: 'alert-success', timeout: 3000 })

			}
		})
	}
	else
		{
    		this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })

		}
	}
		
	
}