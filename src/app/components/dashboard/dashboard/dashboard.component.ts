import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  Doctors:any;
  constructor(private httpService:HttpService){

  }

  ngOnInit(){

   this.httpService.GetService().subscribe((res:any)=>{
    console.log(res,'res')
    this.Doctors=res;
   })
  }
}
