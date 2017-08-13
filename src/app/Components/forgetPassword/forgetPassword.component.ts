import { Component, OnInit } from '@angular/core';
import { users } from '../../shared/users.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';
import { ValidateService } from '../../shared/validate.service';

@Component({
    selector: 'app-forget-password-user',
    templateUrl: './forgetPassword.component.html'
  })
  export class ForgetPasswordUserComponent implements OnInit
  {
    token: String;
    password: String;
    constructor(private authService: users,
        private router: Router,
        private flashMessage: FlashMessagesService,
        private route: ActivatedRoute,
        private validateService: ValidateService) {
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
  
      const info = {
        token: this.token,
        Password: this.password
      }
      this.authService.resetPassword(info).subscribe(data =>
      {
        if (data.success) {
          this.flashMessage.show(data.message, {
            cssClass: 'alert-success',
            timeout: 5000
          });
          this.router.navigate(['login']);
        } else {
          this.flashMessage.show(data.message, {
            cssClass: 'alert-danger',
            timeout: 5000
          });
          this.router.navigate(['/']);
        }
      });
  
    }
  }