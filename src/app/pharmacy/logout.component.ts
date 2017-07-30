import {Component , OnInit} from '@angular/core';
import {users} from '../shared/users.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({

	template:'',
	providers:[users]
})

export class logout implements OnInit{

	constructor(private user: users,
				private router: Router,
				private flashMessage: FlashMessagesService
				)
	{}

	ngOnInit(){
	this.user.logout()	
    this.router.navigate(['/login']);
    return false;
  }

}
	