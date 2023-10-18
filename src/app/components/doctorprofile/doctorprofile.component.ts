import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DoctorsComponent } from '../doctors/doctors.component';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.scss']
})
export class DoctorprofileComponent {
list:any;
  constructor(public dialogRef: MatDialogRef<DoctorsComponent>,@Inject(MAT_DIALOG_DATA) public data:any){

    if(data){
      this.list=data;
    }
  }

}
