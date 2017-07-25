import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import { Http ,Headers ,RequestOptions,Response } from '@angular/http'
//import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map'
@Injectable()
export class users {
	
	succ: boolean;
	authId: any;
  	user: any;

	private url = 'http://146.185.148.66:3002'

	constructor(private http: Http , private router: Router)
	{
		

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

        let headers = new Headers();
            headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
            headers.append('Content-Type', 'application/json')

         return this.http.post(this.url + '/register', userData, new RequestOptions({  headers: headers}))
                .map(res => {return res.status})
        
          }          
	logout():any {

		let headers = new Headers();
    		headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
    		this.http.get(this.url+'/logout', new RequestOptions({  headers: headers})).map(res=>res.json).subscribe(data=>{ if(data){ return this.router.navigate([''])}})

    	
		  }  
		loggedIn() {
	//return tokenNotExpired() && this.user != null;
	//since we did not make any tokens yet , after making the tokens, we will undo commenting the first statement
	//return tokenNotExpired() && this.user != null;
	return this.user !=null ;

  }  

  storeUserData(id, email) {
    localStorage.setItem('id', id);
    localStorage.setItem('email', email);
    this.authId = id;
    this.user = email;
  }

 
}