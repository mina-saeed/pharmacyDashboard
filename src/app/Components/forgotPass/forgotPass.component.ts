import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {users} from '../../shared/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {ValidateService} from '../../shared/validate.service';
import {Md5} from 'ts-md5/dist/md5';
@Component({
	
	selector: 'app-forgotPAss',

	templateUrl:'./forgotPass.component.html',
	providers:[users]
})
export class forgotPass implements OnInit {
    email:String;
    type: String = "pharmacy";
    token: String;
    constructor(
		private user: users,
		private router: Router,
		private flashMessage: FlashMessagesService, 
		private validateService: ValidateService
    
		 ){}

	ngOnInit()
{}
forgotPassword()
{
  const body =
  {
    type:"pharmacy",
    email:this.email,
    token: this.token

  }
 
  this.user.forgetPassword(body).subscribe(resp =>
    {
      
      if(resp == 200){
        console.log("user found");
        console.log(body.email);
        this.user.storeUserDataEmail(body.email);
        return this.router.navigate(['forgetPassword']);
       /* this.flashMessage.show(resp.message , {
          cssClass : 'alert-success',
          timeout : 5000
        });*/
      }
      else {
        console.log("user not found");
       /* this.flashMessage.show(resp.message ,{
          cssClass : 'alert-danger',
          timeout : 5000
        });*/
      }
    });
  }
}