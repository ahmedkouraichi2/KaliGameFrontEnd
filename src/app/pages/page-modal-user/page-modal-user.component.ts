import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../services/model/User";
import {UserServiceService} from "../../services/serviceApi/user/user-service.service";
import {ERole} from "../../services/model/ERole";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

interface Rolename{
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-page-modal-user',
  templateUrl: './page-modal-user.component.html',
  styleUrls: ['./page-modal-user.component.scss']
})
export class PageModalUserComponent implements OnInit {
  newUser= new User();

  roleForm:FormGroup;


  role:Rolename[]=[
    {value:'ROLE_USER',viewValue:'Utilisateur'},
    {value:'ROLE_ADMIN',viewValue:'Admisatrateur'}
  ]
  form: FormGroup;

  constructor( private userService:UserServiceService) {
   /* this.newUser.role.name=ERole.ROLE_USER*/
  }

  ngOnInit(): void {
    this.initRoleForm();
    this.intForm();
  }

  initRoleForm() {
    this.roleForm = new FormGroup({
      role: new FormControl('Utilisateur')
    })
  }
  intForm(){
    this.form=new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      login: new FormControl('')
    })
  }
  addUser(){
    console.log(this.newUser.firstName);
    console.log(this.newUser.lastName);
    console.log(this.newUser.email);
    /*this.userService.ajouterUser(this.newUser).subscribe(proc=>{
      console.log(proc);
      window.location.reload();
    })*/
  }

  onSubmit(value: any) {

    this.newUser.firstName=this.form.value.firstname
    this.newUser.lastName=this.form.value.lastname
    this.newUser.email=this.form.value.login

    console.log(this.newUser)
    this.userService.ajouterUser(this.newUser).subscribe(proc=>{
      console.log(proc);
      window.location.reload();
    })
  }
}
