import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {users} from '../shared/users.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private users:users, private router:Router){

  }

  canActivate(){
    if(this.users.loggedIn()){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}