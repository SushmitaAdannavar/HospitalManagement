import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/Services/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!:FormGroup;usercheck:any;email!:string;password!:string;
  user='1';
public tokenName:string='token'
  constructor(private formBuilder:FormBuilder,private signin:SigninService,private router:Router){

  }

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      "email":['',Validators.required],
      "password":['',Validators.required]
    })
    
  }

  login(){
    this.email=this.loginForm.value.email;
    this.password=this.loginForm.value.password;
    this.signin.loginService().subscribe((val:any)=>{
      console.log(val);
     this.usercheck=val.filter((item:any)=>{
      console.log("logged")
      console.log(item.email,this.email);console.log(item.password)
       return this.email==item.email && this.password==item.password
     })
     
     console.log(this.usercheck)
     if(this.usercheck.length==1){
      console.log("successfull");
      localStorage.setItem(this.tokenName,this.user)
      this.router.navigate(['/dashboard/doctors']);
      
     }

    })
  }
}
