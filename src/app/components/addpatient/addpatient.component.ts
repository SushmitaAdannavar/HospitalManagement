import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PatientsComponent } from '../patients/patients.component';


@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddpatientComponent {

  patientForm!:FormGroup;

  edit=false;
  profileimage!:string;
  name!: string;ID!: string;age!: string;address!: string;number!: string;lastvisit!: string;status!: string;id!: string;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,public dialogRef: MatDialogRef<PatientsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
 { 
  if(data){
    this.profileimage=data.img,
    this.name=data.name,
    this.ID=data.ID,
    this.age=data.age,
    this.address=data.address,
    this.number=data.number,
    this.lastvisit=data.lastvisit,
    this.status=data.status,
    this.id=data.id
    this.edit=true
  }
 }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      ID: [this.ID, Validators.required],
      age: [this.age, Validators.required],
      address: [this.address, Validators.required],
      number: [this.number, Validators.required],
      lastvisit: [this.lastvisit, Validators.required],
      status: [this.status, Validators.required]
    })
  }

  addpatient() {
    let reqdata = {
      "img":this.profileimage,
      "name": this.patientForm.value.name,
      "ID":this.patientForm.value.ID,
      "age": this.patientForm.value.age,
      "address": this.patientForm.value.address,
      "number": this.patientForm.value.number,
      "lastvisit": this.patientForm.value.lastvisit,
      "status": this.patientForm.value.status
    }

    this.userService.postpatient(reqdata).subscribe((res) => {
      console.log('res', res)
      this.dialogRef.close();
    })
  }

  editpatient(){
    let reqdata = {
      "img":this.profileimage,
      "name": this.patientForm.value.name,
      "ID":this.patientForm.value.ID,
      "age": this.patientForm.value.age,
      "address": this.patientForm.value.address,
      "number": this.patientForm.value.number,
      "lastvisit": this.patientForm.value.lastvisit,
      "status": this.patientForm.value.status
    }
    this.userService.editpatient(reqdata,this.id).subscribe((res) => {
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
