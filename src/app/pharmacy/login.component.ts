import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {users} from '../shared/users.service'

@Component({
	selector: 'app-login',

	templateUrl:'./login.component.html',
	providers:[users]
})

export class login {
	pharmacy :any= []
	constructor(private user: users, private router: Router){}

	onLogin(userData){
		//17-06-27 03:07
		let date = new Date()

		let h = date.getHours()
		let m  = date.getMinutes()
		var minutes :string=''
		var hours :string='' 
		if(m<10){
			minutes = '0'+''+m+''
		}else{
			minutes = ''+m+''
		}

		if(h<10){
			hours = '0'+''+h+''
		}else{
			hours = ''+h+''
		}
		let date_format = hours+':'+minutes
		let token = btoa(date_format+date_format)


		 this.user.getUser(userData.email, userData.password , token).subscribe(data => {
    				if(data){
    					console.log(data)
    					return this.router.navigate(['/orders'],data)    				
    				}else{
    					return false
    				}

      		});


	}
	onRegister(userData){

		let date = new Date()

		let h = date.getHours()
		let m  = date.getMinutes()
		var minutes :string=''
		var hours :string='' 
		if(m<10){
			minutes = '0'+''+m+''
		}else{
			minutes = ''+m+''
		}

		if(h<10){
			hours = '0'+''+h+''
		}else{
			hours = ''+h+''
		}
		let date_format = hours+':'+minutes
		let token = btoa(date_format+date_format)


		this.user.register(userData,  token).subscribe(res => {
                    if(res){
                        
                        return this.router.navigate(['/login'])                    
                    }else{
                        return false
                    }

              });


	}
	createNewAccount()
	{
		this.router.navigate(['/pharmacysignup']);
	}	
} 