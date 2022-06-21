import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../services/model/User";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserServiceService} from "../../services/serviceApi/user/user-service.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
interface Rolename{
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-page-modal-user-update',
  templateUrl: './page-modal-user-update.component.html',
  styleUrls: ['./page-modal-user-update.component.scss']
})

export class PageModalUserUpdateComponent implements OnInit {

  currentUser= new User();

  roleForm:FormGroup;

  role:Rolename[]=[
    {value:'ROLE_USER',viewValue:'ROLE_USER'},
    {value:'ROLE_ADMIN',viewValue:'ROLE_USER'}
  ]
  form: FormGroup;
  userRole: FormGroup;

  constructor( private userService:UserServiceService,private matDialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any,fb:FormBuilder) {
    this.currentUser=this.data.user
    this.form=fb.group({
      firstname: [this.currentUser.firstName],
      lastname: [this.currentUser.lastName],
      login: [this.currentUser.email],
    })
    this.userRole=fb.group({
      role:this.currentUser.role.name

    })

    console.log(this.currentUser.role.name)
  }

  ngOnInit(): void {

/*    this.initRoleForm();
    this.intForm();*/
  }
/*
  initRoleForm() {
    this.roleForm = new FormGroup({
      role: new FormControl(this.role)
    })
  }
  intForm(){
   this.form =new FormGroup({
      firstname: new FormControl(this.currentUser.firstName),
      lastname: new FormControl(this.currentUser.lastName),
      login: new FormControl(this.currentUser.email),




    })
  }*/


  updateUser(value: any) {

    this.userService.updateUser(this.currentUser).subscribe(proc => {

      window.location.reload();
    })
  }
}
