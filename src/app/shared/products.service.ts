import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

@Injectable()

export class productService {

	constructor(private http: Http) { }

	allProducts() {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')

		return this.http.get(config.productIP + 'all', new RequestOptions({ headers: headers })).map(res => res.json())
	}
	addProduct(product) {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		return this.http.post(config.productIP + 'new', product, new RequestOptions({ headers: headers })).map(res => { return res.status })

	}

	getAllCategories(): any {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.get(config.productcategoryIP + 'all', new RequestOptions({ headers: headers })).map(res => res.json())
	}

	getAllsubCategories(catID): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.get(config.productcategoryIP + 'allSubCategories/' + catID, new RequestOptions({ headers: headers })).map(res => {
			if (res.status == 404) {
				return res.status
			}
			else {
				return res.json();
			}
		})
	}



}