import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/Services/signin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupform!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder,private signin:SigninService,private router:Router){

  }

  ngOnInit(){
    this.signupform=this.formBuilder.group({
      "name":['',Validators.required,Validators.pattern("")],
      "email":['',[Validators.required,Validators.email]],
      "password":['',[Validators.required,Validators.minLength(6)]]
    })
  }

  register(){
    this.submitted = true;
        if (this.signupform.invalid) {
            return;
        }
    let reqdata={
      "name":this.signupform.value.name,
      "email":this.signupform.value.email,
      "password":this.signupform.value.password
    }
    this.signin.signup(reqdata).subscribe(val=>{
      console.log(val);
      this.router.navigate(['/login']);
    })
  }
  
}
