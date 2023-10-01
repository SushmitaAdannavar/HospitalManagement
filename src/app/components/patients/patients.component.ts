import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
import { AddpatientComponent } from '../addpatient/addpatient.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {
  patients:any;
  search:string='';
    constructor(private userService:UserService,private router:Router,public dialog:MatDialog){}
  
    ngOnInit(){
      this.userService.getpatientsList().subscribe((res)=>{
        console.log('res',res);
        console.log()
        this.patients=res;
      })
      this.userService.searchval.subscribe((val)=>{
        this.search=val;
       })
    }
  
    searchfunc(event:any){
      this.ngOnInit();
    this.search=event.target.value;
    }
  
    addpatients(){
      const dialogRef = this.dialog.open(AddpatientComponent, {
        height: '700px',
        width: '700px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
       
      });
    
    }
  
    editpatient(list:any){
      const dialogRef = this.dialog.open(AddpatientComponent, {
        height: '700px',
        width: '700px',
          data: list
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
       
      });
    
    }
  
    deletepatient(id:any){
       this.userService.deletepatient(id).subscribe((data)=>{
        this.ngOnInit();
       })
    }
    
}
