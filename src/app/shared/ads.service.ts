import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

@Injectable()

export class AdsService {
	constructor(private http: Http) { }

	addAds(adv) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		return this.http.post(config.adsIP + 'requestAds', adv, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})
	}

	getrequestedAds(): any {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.get(config.adsIP + 'pharmacyAdsRequests/' + localStorage.getItem('email'), new RequestOptions({ headers: headers })).map(res => res.json());

	}

	deleteAds(id) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json')
		return this.http.delete(config.adsIP + 'deleteAds/' + id, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})

	}

	updateAds(ads) {
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		return this.http.put(config.adsIP + 'updateAds', ads, new RequestOptions({ headers: headers })).map(res => {
			return res.status
		})

	}

	store(ads) {
		localStorage.setItem('ads', JSON.stringify(ads));
	}

	retreive() {
		return localStorage.getItem('ads');
	}

	clear() {
		localStorage.removeItem('ads');
	}

}