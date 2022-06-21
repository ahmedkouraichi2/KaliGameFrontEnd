import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../services/model/User";
import {UserServiceService} from "../../services/serviceApi/user/user-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id:any;
  userUpdate=new User();
  constructor(private token: TokenStorageService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.id = this.token.getToken();
    console.log(this.token.getToken());
    this.userService.consulterUser(this.id).
    subscribe(user=>{
      this.userUpdate=user;
      console.log(this.userUpdate);
    })
  }

}
