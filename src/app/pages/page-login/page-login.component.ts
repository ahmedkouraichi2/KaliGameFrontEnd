import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  public showPasswordOnPress: boolean ;

  public showPassword: boolean = false;
  ngOnInit(): void {
    window.sessionStorage.clear();

    this.password = 'password';
    this.initRegForm();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  password;

  show = false;

  registrationForm: FormGroup;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;

  constructor(private fb: FormBuilder,private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router) {}



  initRegForm() {
    this.registrationForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required]
    });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
  onSubmit(): void {


 /*    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token.toString());
        console.log('login'+data.token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(["/dashboard/home"]).then();
        this.roles = this.tokenStorage.getUser().role;
        console.log(this.tokenStorage.getUser())
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    ); */


    this.router.navigate(["/dashboard/home"]) }

  reloadPage(): void {
    window.sessionStorage.clear();
  }
}




