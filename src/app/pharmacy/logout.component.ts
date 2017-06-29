import {Component , OnInit} from '@angular/core'
import {users} from '../shared/users.service'
@Component({

	template:'',
	providers:[users]
})

export class logout implements OnInit{

	constructor(private user: users){}

	ngOnInit(){
		this.user.logout()
	}
} 