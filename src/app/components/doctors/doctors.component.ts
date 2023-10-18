import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';
import {MatDialog} from '@angular/material/dialog';
import { DoctorprofileComponent } from '../doctorprofile/doctorprofile.component';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit{
  Doctors:any;search!:string;
  constructor(private userService:UserService,public dialog:MatDialog){

  }

  ngOnInit(){

   this.userService.getdoctorsList().subscribe((res:any)=>{
    console.log(res,'res')
    this.Doctors=res;
   })
   this.userService.searchval.subscribe((val)=>{
    this.search=val;
   })
  }

  viewProfile(list:any){
    let dialogRef = this.dialog.open(DoctorprofileComponent, {
      height: '670px',
      width: '700px',
      data:list
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
     
    });
  }
}
