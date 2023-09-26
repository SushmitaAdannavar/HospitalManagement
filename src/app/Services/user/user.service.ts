import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  getdoctorsList(){
    return this.http.GetService('Doctors');
  }
  postappointment(reqdata:any)
  {
  return this.http.PostService('Appointments',reqdata);
  }
  getappointment(){
    return this.http.GetService('Appointments');
  }
}
