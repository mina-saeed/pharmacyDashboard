import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import { Http ,Headers ,RequestOptions,Response } from '@angular/http'

import 'rxjs/add/operator/map'
@Injectable()
export class users {
	private url = 'http://207.154.240.16:3002'
	constructor(private http: Http , private router: Router){

	}
	getUser(user_email , user_password ,request_token):any {

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		headers.append('Content-Type', 'application/json')
    		let body = {
    			email:user_email,
			password:user_password,
			token: request_token,
		};
		 return this.http.post(this.url + '/login', JSON.stringify(body), new RequestOptions({  headers: headers})).map(res => res.json())
    	
      	}
    register(userData  ,request_token):any {

/*   
  
    var pharma_address = req.body.address
    var pharma_locations = req.body.locations

    var pharma_rating = req.body.rating

*/


        console.log(userData)
        console.log(userData.address.city)

        let headers = new Headers();
            headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
            headers.append('Content-Type', 'application/json')
            let body = {
                name: userData.name,
                email:userData.user_name,
                password:userData.reg_password,
                mobile: userData.mobile,
                telephone: userData.tel,
                time: userData.time,
                location:{
                    city: userData.address.city,
                    location: userData.address.location,
                    street: userData.address.street,
                    deliverTo: userData.address.deliverTo
                },
                token: request_token,
        };
         return this.http.post(this.url + '/register', JSON.stringify(body), new RequestOptions({  headers: headers}))
                .map(res => {return res.status})
        
          }          
	logout():any {

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		this.http.get(this.url+'/logout', new RequestOptions({  headers: headers})).map(res=>res.json).subscribe(data=>{ if(data){ return this.router.navigate([''])}})

    	
      	}      	
}