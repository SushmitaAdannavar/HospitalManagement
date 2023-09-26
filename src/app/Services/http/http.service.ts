import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  baseurl='http://localhost:3000/'
  GetService(url:string){
    return this.http.get(this.baseurl+url);
  }

  PostService(url:string,reqdata:any){
    return this.http.post(this.baseurl+url,reqdata)
  }

}
