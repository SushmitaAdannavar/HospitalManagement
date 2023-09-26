import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  Doctors:any;
  constructor(private userService:UserService){

  }

  ngOnInit(){

   this.userService.getdoctorsList().subscribe((res:any)=>{
    console.log(res,'res')
    this.Doctors=res;
   })
  }
}
