import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Http , Headers , RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map' 


@Injectable()

export class medicineService {
	private url: string  = 'http://localhost:3004/';

	constructor(private http: Http , private router: Router){}

	getAllMedicines():any{
		
		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

		return this.http.get(this.url+'all' ,new RequestOptions({headers: headers})).map(res=>res.json())
	}

	addMedicine(medicine){

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')

    		return this.http.post(this.url+'new', JSON.stringify(medicine), new RequestOptions({headers: headers})).map(res=>{
    			return res.status
    		})
	}	
}