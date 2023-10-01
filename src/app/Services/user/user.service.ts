import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject } from 'rxjs';

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
  editappointment(reqdata:any,id:any){
    return this.http.PutService('Appointments/'+id,reqdata)
  }
  deleteappointment(id:any){
    return this.http.DeleteService('Appointments/'+id)
  }

  postpatient(reqdata:any)
  {
  return this.http.PostService('Patients',reqdata);
  }
  getpatientsList(){
    return this.http.GetService('Patients');
  }
  editpatient(reqdata:any,id:any){
    return this.http.PutService('Patients/'+id,reqdata)
  }
  deletepatient(id:any){
    return this.http.DeleteService('Patients/'+id)
  }

  private messageSource=new BehaviorSubject("")
  searchval=this.messageSource.asObservable();


  changeMessage(message:any){
    this.messageSource.next(message);
  }
}
