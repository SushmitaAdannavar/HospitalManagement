import { Component } from '@angular/core';
import {  AbstractControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  submitted=false;
  appointmentForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private userService:UserService){}

  ngOnInit(){
    this.appointmentForm=this.formBuilder.group({
      name:['',Validators.required],
      doctor:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      date:['',Validators.required],
      fromtime:['',Validators.required],
      totime:['',Validators.required],
      number:['',Validators.required],
      injury:['',Validators.required]
    })
  }

  addappointment(){
    let reqdata={
      "name":this.appointmentForm.value.name,
      "doctor":this.appointmentForm.value.doctor,
      "email":this.appointmentForm.value.email,
      "date":this.appointmentForm.value.date,
      "fromtime":this.appointmentForm.value.fromtime,
      "totime":this.appointmentForm.value.totime,
      "number":this.appointmentForm.value.number,
      "injury":this.appointmentForm.value.injury
    }

    this.userService.postappointment(reqdata).subscribe((res)=>{
     console.log('res',res)
    })
  }
}
