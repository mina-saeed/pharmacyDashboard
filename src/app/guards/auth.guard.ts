import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {users} from '../shared/users.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private user:users, private router:Router){

  }

  canActivate(){
    if(this.user.loggedIn()){
      console.log("logged in");
      return true;
    } else {
      console.log("not logged in ");
      this.router.navigate(['/login']);
      return false;
    }
  }
}