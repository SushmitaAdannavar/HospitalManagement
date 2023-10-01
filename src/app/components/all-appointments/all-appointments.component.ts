import { Component } from '@angular/core';
import { UserService } from '../../Services/user/user.service';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AppointmentComponent } from '../appointment/appointment.component';


@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss']
})
export class AllAppointmentsComponent {
appointments:any;
search:string='';
  constructor(private userService:UserService,private router:Router,public dialog:MatDialog){}

  ngOnInit(){
    this.userService.getappointment().subscribe((res)=>{
      console.log('res',res);
      console.log()
      this.appointments=res;
    })
    this.userService.searchval.subscribe((val)=>{
      this.search=val;
     })
  }

  searchfunc(event:any){
    this.ngOnInit();
  this.search=event.target.value;
  }

  addappointment(){
    const dialogRef = this.dialog.open(AppointmentComponent, {
      height: '700px',
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
     
    });
  
  }

  edit(list:any){
    const dialogRef = this.dialog.open(AppointmentComponent, {
      height: '700px',
      width: '700px',
        data: list
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
     
    });
  
  }

  delete(id:any){
     this.userService.deleteappointment(id).subscribe((data)=>{
      this.ngOnInit();
     })
  }
  


}
