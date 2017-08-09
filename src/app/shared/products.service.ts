import {Injectable} from '@angular/core'
import {Http, RequestOptions, Headers} from '@angular/http'

@Injectable()

export class productService{

	private url ="http://146.185.148.66:3005/"
	constructor(private http: Http){}

	allProducts(){
			let headers = new Headers();
    			headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    			headers.append('Content-Type', 'application/json')

			return this.http.get(this.url+'all', new RequestOptions({headers: headers})).map(res=>res.json())
	}
	addProduct(product){

			let headers = new Headers();
    			headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    return this.http.post(this.url+'new',product, new RequestOptions({headers: headers})).map(res=>{return res.status})

	}

}