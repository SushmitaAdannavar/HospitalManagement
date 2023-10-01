import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  public tokenName:string='token';
  constructor() { }

  gettoken(){  
    return localStorage.getItem(this.tokenName)!=null;  
    } 

    logout(){
      console.log("remove item")
      localStorage.removeItem(this.tokenName)
    }
}
