import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form:any={
    firstName:null,
    lastName:null,
    email:null,
    password:null
  }
  isSuccessful=false;
  isSignUpFailed=false;
  errorMessage='';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const {firstName,lastName,email,password}=this.form;
    this.authService.register(firstName,lastName,email,password).subscribe(
      data=>{
        console.log(data);
        this.isSuccessful=true;
        this.isSignUpFailed=false;
      },
      err =>{
        this.errorMessage=err.error.message;
        this.isSignUpFailed=true;
      }
    )
  }

}
