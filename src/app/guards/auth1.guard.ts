import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {users} from '../shared/users.service';

@Injectable()
export class AuthGuard1 implements CanActivate{
  constructor(private user:users, private router:Router){

  }

  canActivate(){
    if(this.user.notloggedIn()){
      console.log(" not logged in");
      return true;
    } else {
      console.log(" logged in ");
       this.router.navigate(['/orders']);
      return false;
    }
  }
}