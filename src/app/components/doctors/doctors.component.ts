import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit{
  Doctors:any;search!:string;
  constructor(private userService:UserService){

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

  
}
