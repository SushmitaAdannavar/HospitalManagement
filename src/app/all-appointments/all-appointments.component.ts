import { Component } from '@angular/core';
import { UserService } from '../Services/user/user.service';



@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss']
})
export class AllAppointmentsComponent {
appointments:any;
search:string='';
  constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.getappointment().subscribe((res)=>{
      console.log('res',res);
      console.log()
      this.appointments=res;
    })
  }

  searchfunc(event:any){
    this.ngOnInit();
  this.search=event.target.value;
  }
  


}
