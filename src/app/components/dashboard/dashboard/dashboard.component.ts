import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardServiceService } from 'src/app/Services/Authguard/authguard-service.service';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  Doctors:any;
 
  constructor( private userService:UserService,private router:Router,private authservice:AuthguardServiceService){}
    
  ngOnInit(){
   this.userService.getdoctorsList().subscribe((res:any)=>{
    console.log(res,'res')
    this.Doctors=res;
   })
  }

  logout(){
    console.log("logged out")
    this.authservice.logout();
    this.router.navigateByUrl('login');
  }

}