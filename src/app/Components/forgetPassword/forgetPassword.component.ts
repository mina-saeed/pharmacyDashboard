import { Component, OnInit } from '@angular/core';
import { users } from '../../shared/users.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';
import { ValidateService } from '../../shared/validate.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
    selector: 'app-forget-password-user',
    templateUrl: './forgetPassword.component.html'

  })
  export class ForgetPasswordUserComponent implements OnInit
  {
    token: String;
    password: String;
    email:String;
    constructor(private authService: users,
        private router: Router,
        private flashMessage: FlashMessagesService,
        private route: ActivatedRoute,
        private validateService: ValidateService,
        private _md5: Md5) {
        this.token = route.snapshot.params['token'];
        
      }
    
      ngOnInit()
    {
    }
    onResetSubmit()
    {
      if (!this.validateService.validatePassword(this.password)) {
        this.flashMessage.show("please insert a valid Password with at least 8 characters and not more than 15 characters", { cssClass: 'alert-warning', timeout: 5000 });
        window.scrollTo(0, 0);
      }
      this.email= localStorage.getItem('email');
      let hash = Md5.hashStr("email");
  
      const info = {
        type:"pharmacy",
        email:localStorage.getItem('email'),
        token: hash,
        password: this.password
      }
      this.authService.resetPassword(info).subscribe(data =>
      {
        if (data == 200 ) {
          console.log("reset done");
          this.router.navigate(['login']);
        }
        else {
          console.log("reset  not done");
          this.router.navigate(['forgotPass']);
        }
      });
  
    }
  }