import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  submitted = false;
  appointmentForm!: FormGroup;
  edit=false;
  profileimage!:string;
  name!: string;doctor!: string;email!: string;date!: string;fromtime!: string;totime!: string;number!: string;injury!: string;id!: string;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,public dialogRef: MatDialogRef<AppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
 { 
  if(data){
    this.profileimage=data.img,
    this.name=data.name,
    this.doctor=data.doctor,
    this.email=data.email,
    this.date=data.date,
    this.fromtime=data.fromtime,
    this.totime=data.totime,
    this.number=data.number,
    this.injury=data.injury,
    this.id=data.id
    this.edit=true
  }
 }

  ngOnInit() {
    this.appointmentForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      doctor: [this.doctor, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      date: [this.date, Validators.required],
      fromtime: [this.fromtime, Validators.required],
      totime: [this.totime, Validators.required],
      number: [this.number, Validators.required],
      injury: [this.injury, Validators.required]
    })
  }

  addappointment() {
    let reqdata = {
      "img":this.profileimage,
      "name": this.appointmentForm.value.name,
      "doctor": this.appointmentForm.value.doctor,
      "email": this.appointmentForm.value.email,
      "date": this.appointmentForm.value.date,
      "fromtime": this.appointmentForm.value.fromtime,
      "totime": this.appointmentForm.value.totime,
      "number": this.appointmentForm.value.number,
      "injury": this.appointmentForm.value.injury
    }

    this.userService.postappointment(reqdata).subscribe((res) => {
      console.log('res', res)
      this.dialogRef.close();
    })
  }

  editappointment(){
    let reqdata = {
      "img":this.profileimage,
      "name": this.appointmentForm.value.name,
      "doctor": this.appointmentForm.value.doctor,
      "email": this.appointmentForm.value.email,
      "date": this.appointmentForm.value.date,
      "fromtime": this.appointmentForm.value.fromtime,
      "totime": this.appointmentForm.value.totime,
      "number": this.appointmentForm.value.number,
      "injury": this.appointmentForm.value.injury
    }
    this.userService.editappointment(reqdata,this.id).subscribe((res) => {
      console.log('res', res)
      this.dialogRef.close();
    })
  }

  cancel(){
    this.dialogRef.close();
  }

  onfileSelect(event:any){
    console.log(event.target.files[0].name);
    this.profileimage=event.target.files[0].name;
  }
}
