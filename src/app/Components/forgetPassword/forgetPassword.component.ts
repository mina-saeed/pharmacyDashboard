import { Component, OnInit } from '@angular/core'
import { users } from '../../shared/users.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  templateUrl: './forgetPassword.component.html',
  providers: [users, Md5]
})

export class reset {
  private email: string
  constructor(private _md5: Md5, private route: ActivatedRoute, private user: users, private router: Router, private flash: FlashMessagesService) {
    this.email = route.snapshot.params['email'];
  }
  onReset(userData) {
    var hashingToken = Md5.hashStr(this.email.toString());
    const body =
      {
        "type": "pharmacy",
        "email": this.email,
        "token": hashingToken,
        "password": userData.password
      }
    this.user.resetPassword(body).subscribe(res => {
      if (res == 200) {
        //this.flash.show("Your password has been reset successfully", { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['login'])
      } else {
        //this.flash.show("Sorry ,incorrect e-mail address", { cssClass: 'alert-danger', timeout: 3000 });
      }

    });
  }

} 