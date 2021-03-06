import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import { Http ,Headers ,RequestOptions,Response } from '@angular/http'
//import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map'
var config = JSON.parse(JSON.stringify(require('../../config.json')));

@Injectable()
export class users {
	
	succ: boolean;
	authId: any;
	username: any;
	email:any;
	  

	private url = 'http://146.185.148.66:3002';
	private url2 ='http://146.185.148.66:3060';
	constructor(private http: Http , private router: Router)
	{
		

	}       
	getUser(user_email , user_password ,request_token):any {

		let headers = new Headers();
    		headers.append('Authorization', config.auth);
    		headers.append('Content-Type', 'application/json')
    		let body = {
    			email:user_email,
				password:user_password,
				token: request_token,
		};
		 return this.http.post(config.userIP + '/login', JSON.stringify(body), new RequestOptions({  headers: headers})).map(res => res.json())
		  
		  
    	
      	}
    register(userData  ,request_token):any {

/*   
  
    var pharma_address = req.body.address
    var pharma_locations = req.body.locations

    var pharma_rating = req.body.rating

*/


        console.log(userData)

        let headers = new Headers();
            headers.append('Authorization', config.auth);
            headers.append('Content-Type', 'application/json')

         return this.http.post(config.userIP + '/register', userData, new RequestOptions({  headers: headers}))
                .map(res => {return res.status})
        
          }          
	logout():any {

			this.authId = null;
			this.email=null;
			this.username=null;
			localStorage.clear();
    	
		  }
	storeUserData(id, email, username,location) {
	console.log('store username' + username);
	console.log('store email'+ email);
	console.log('store id' + id);
	this.authId = id;
	this.username = username;
	this.email = email;
	console.log("this.authID" + this.authId);
	console.log("this.email" + this.email);
	console.log("this.username" + this.username);
	localStorage.setItem('id', this.authId);
	localStorage.setItem('email', this.email);
	localStorage.setItem('username', this.username);
	localStorage.setItem('location',location)
    
  }
  storeUserDataEmail(email)
  {
	this.email = email;
	console.log("this.email" + this.email);
	localStorage.setItem('email', this.email);
  }
  
	loggedIn() {
	//return tokenNotExpired() && this.user != null;
	//since we did not make any tokens yet , after making the tokens, we will undo commenting the first statement
	return 	localStorage.getItem('id') != null && 
			localStorage.getItem('email') != null &&
			localStorage.getItem('username') !=null  ;
			

  } 
	notloggedIn()
	{
	return 	localStorage.getItem('id') == null && 
			localStorage.getItem('email') == null &&
			localStorage.getItem('username') ==null  ;
	}
	resetPassword(info)
	{
		console.log("reset");
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json');
		return this.http.put(config.resetIP + '/changePassword', info, new RequestOptions({headers: headers}))
		 .map(res => res.status);
	}
	forgetPassword(body)
	 {
		console.log("forgot");
		let headers = new Headers();
		headers.append('Authorization', config.auth);
		headers.append('Content-Type', 'application/json');
		return this.http.post(config.resetIP +'/checkUser', body ,new RequestOptions({headers: headers})).map(res=>res.status);
		
        
	
	}

	pharmacyHistory(): any{
			let headers = new Headers();
			headers.append('Authorization', config.auth);
			headers.append('Content-Type', 'application/json')
			return this.http.get(config.userIP + '/pharmacyHistory/' + localStorage.getItem('email'), new RequestOptions({ headers: headers })).map(res => res.json());
	
	}
}

  
 
