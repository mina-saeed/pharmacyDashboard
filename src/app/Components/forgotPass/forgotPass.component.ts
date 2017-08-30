import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../../shared/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Md5 } from 'ts-md5/dist/md5';
@Component({

  selector: 'app-forgotPAss',

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