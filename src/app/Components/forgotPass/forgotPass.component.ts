import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {users} from '../../shared/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {ValidateService} from '../../shared/validate.service';
@Component({
	
	selector: 'app-forgotPAss',

	templateUrl:'./forgotPass.component.html',
	providers:[users]
})
export class forgotPass implements OnInit {
    email:String;
    forget: Boolean;
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
 
  this.user.forgetPassword(this.email).subscribe(resp =>
  {
    
    if(resp.success == true){
      this.flashMessage.show(resp.message , {
        cssClass : 'alert-success',
        timeout : 5000
      });
    }
    else {
      this.flashMessage.show(resp.message ,{
        cssClass : 'alert-danger',
        timeout : 5000
      });
    }
  });
}
}