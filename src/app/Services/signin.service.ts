import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpService) { }

  signup(reqdata:any){
    return this.http.PostService('Registers',reqdata)
  }
  loginService(){
    return this.http.GetService('Registers');
  }
}
