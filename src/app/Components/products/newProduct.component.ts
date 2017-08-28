import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { productService } from '../../shared/products.service'
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({

	templateUrl: 'newProduct.component.html',
	providers: [productService]
})

export class newProduct implements OnInit {
	private allProductCategories = []
	private allProductSubCategories = []
	bar: string
	engname: string
	arbname: string
	engdesc: string
	arbdesc: string
	price: string
	category: string
	subCategory: string 
	filesToUpload: Array<File> = [];


	constructor(private product: productService, private router: Router, private flash: FlashMessagesService) { }

	ngOnInit() {
		this.product.getAllCategories().subscribe(res => {
			this.allProductCategories = res
			this.category = this.allProductCategories[0].name_en
			this.product.getAllsubCategories(this.allProductCategories[0]._id).subscribe(res => {
				if (res == 404) {
					return this.subCategory = null
				}
				else {
					this.allProductSubCategories = res
					this.subCategory = this.allProductSubCategories[0].name_en
					return this.allProductSubCategories
				}
			})
		})

	}

	fileChange(event) {
		this.filesToUpload = <Array<File>>event.target.files;
	}

	addProduct() {
		if (this.filesToUpload.length > 0) {
			const files: Array<File> = this.filesToUpload;
			const formData = new FormData();
			formData.append("image", files[0], files[0]['name']);
			formData.append('name_en', this.engname)
			formData.append('name_ar', this.arbname)
			formData.append('description_en', this.engdesc)
			formData.append('description_ar', this.arbdesc)
			formData.append('price', this.price)
			formData.append('barcode', this.bar)
			formData.append('category', this.category)
			formData.append('subCategory', this.subCategory)
			formData.append('creator',localStorage.getItem('email'))
			formData.append('location',localStorage.getItem('location'))			
			this.product.addProduct(formData).subscribe(res => {
				if (res) {
					this.router.navigate(['/products'])
					this.flash.show('Product added Successfully', { cssClass: 'alert-success', timeout: 3000 })
				}
			})
		}
		else {
			window.scroll(0, 0)
			this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })
		}
	}

	Onchange(cat) {
		for (var i = 0; i < this.allProductCategories.length; i++) {
			if (this.allProductCategories[i].name_en == cat) {
				this.product.getAllsubCategories(this.allProductCategories[i]._id).subscribe(res => {
					if (res.status == 404) {
						console.log(res.status)
						return this.subCategory = null
					}
					else {
						this.allProductSubCategories = res
						this.subCategory = this.allProductSubCategories[0].name_en
						return this.allProductSubCategories
					}
				})
			}
		}
	}
}
