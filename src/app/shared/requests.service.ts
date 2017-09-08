import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

@Injectable()

export class requestService {

	constructor(private http: Http) { }

	sendRequest(medicine) {
		console.log(medicine)

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		return this.http.post(config.requestMedicine + 'requestMedicine', medicine, new RequestOptions({ headers: headers })).map(res => { return res.status })

	}


	nonFixedMedicines(): any {

		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')

		return this.http.get(config.medicineIP + 'nonFixed', new RequestOptions({ headers: headers })).map(res => res.json())
	}	
}