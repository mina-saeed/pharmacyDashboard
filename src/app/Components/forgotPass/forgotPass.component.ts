/* <<<<<<< Updated upstream
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../../shared/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Md5 } from 'ts-md5/dist/md5';
=======
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {users} from '../../shared/users.service';
import {FlashMessagesService } from 'angular2-flash-messages';
import {ValidateService} from '../../shared/validate.service';
import {Md5} from 'ts-md5/dist/md5';
import {TranslateService} from 'ng2-translate';

>>>>>>> Stashed changes
@Component({

<<<<<<< Updated upstream
  selector: 'app-forgotPAss',
=======
	templateUrl:'./forgotPass.component.html',
	providers:[users, Md5] 
})
export class forgotPass implements OnInit {
    email:String;
    type: String = "pharmacy";
    token: String;
    constructor(translate: TranslateService,
		private user: users,
		private router: Router,
		private flashMessage: FlashMessagesService, 
    private validateService: ValidateService,
    private _md5: Md5
    
		 ){
     translate.use('ar');
     }

	ngOnInit()
{
  var x= 'email'
  console.log( Md5.hashStr('blah blah blah') );
  console.log( Md5.hashStr('ph3@mail.com') );
  console.log( 'hashing' + Md5.hashStr(x.toString()) );
}
forgotPassword(data:any)
>>>>>>> Stashed changes

  templateUrl: './forgotPass.component.html',
  providers: [users, Md5]
})
export class forgotPass {
  constructor(private _md5: Md5, private user: users, private router: Router, private flash: FlashMessagesService) { }
  onForget(userData) {
    var hashingToken = Md5.hashStr(userData.email.toString());
    const body =
      {
        "type": "pharmacy",
        "email": userData.email,
        "token": hashingToken

      }
    this.user.forgetPassword(body).subscribe(res => {
      if (res == 200) {
        this.flash.show("Please Check your mail", { cssClass: 'alert-success', timeout: 3000 })
      } else {
        this.flash.show('Email does not exist', { cssClass: 'alert-danger', timeout: 3000 });
      }

    });

  }

}
*/