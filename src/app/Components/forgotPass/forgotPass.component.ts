import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {users} from '../../shared/users.service';
import {FlashMessagesService } from 'angular2-flash-messages';
import {ValidateService} from '../../shared/validate.service';
import {Md5} from 'ts-md5/dist/md5';
@Component({
	
	selector: 'app-forgotPAss',

	templateUrl:'./forgotPass.component.html',
	providers:[users, Md5] 
})
export class forgotPass implements OnInit {
    email:String;
    type: String = "pharmacy";
    token: String;
    constructor(
		private user: users,
		private router: Router,
		private flashMessage: FlashMessagesService, 
    private validateService: ValidateService,
    private _md5: Md5
    
		 ){}

	ngOnInit()
{}
forgotPassword()
{
  let hash = Md5.hashStr("email");
  const body =
  {
    type:"pharmacy",
    email:this.email,
    token: hash

  }
 
  this.user.forgetPassword(body).subscribe(resp =>
    {
      console.log(body.email);
      
      if(resp == 200){
        console.log("user found");
        console.log(body.email);
        this.user.storeUserDataEmail(body.email);
       this.flashMessage.show(resp.message , {
          cssClass : 'alert-success',
          timeout : 5000
        });
        return this.router.navigate(['forgetPassword']);
      }
      else {
        console.log("user not found");
        this.flashMessage.show(resp.message ,{
          cssClass : 'alert-danger',
          timeout : 5000
        });
      }
    });
  }
}