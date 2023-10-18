

import {Injectable} from '@angular/core'
import { CanActivate, Router } from '@angular/router';
import { AuthguardServiceService } from '../Services/Authguard/authguard-service.service';

@Injectable({
  providedIn:'root'
})

export class AuthenticationGuard implements CanActivate{

  constructor(private Authguardservice: AuthguardServiceService, private router: Router){}
  canActivate():boolean
  {
    if (this.Authguardservice.gettoken()) {  
      return true;  
  } 
  else{
    this.router.navigateByUrl('login');
    return false;
  } 
  }
}