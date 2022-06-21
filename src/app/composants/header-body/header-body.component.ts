import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {UserServiceService} from "../../services/serviceApi/user/user-service.service";
import {FileUploadService} from "../../services/serviceApi/file-update/file-upload.service";
import {User} from "../../services/model/User";

@Component({
  selector: 'app-header-body',
  templateUrl: './header-body.component.html',
  styleUrls: ['./header-body.component.scss']
})
export class HeaderBodyComponent implements OnInit {

  @Input()
  collapsed=false;
  @Input()
  screenWidth=0;
  imageToShow: any;
  isImageLoading:any;
  name:any;
  id:any;
  userUpdate=new User();
  constructor(private router: Router,
              private authenticationService: AuthService,
              private token: TokenStorageService,
              private uploadService:FileUploadService,
              private userService:UserServiceService,
              ) { }

  ngOnInit(): void {
    this.id = this.token.getUser().id;

    this.userService.consulterUser(this.id).
    subscribe(user=>{
      this.userUpdate=user;
      console.log(this.userUpdate.firstName);
    })
    this. getImageFromService();
    this.name=this.token.getUser().name;
    console.log(this.token.getUser().firstname)
  }

  logout() {

    this.authenticationService.signOut();
    this.router.navigate(['accounts/login']);
  }

  getHeaderClass():String{
    let styleClass='';
    if(this.collapsed && this.screenWidth>768){
      styleClass='header-trimmed';
    }
    else if(this.collapsed && this.screenWidth<=768 &&this.screenWidth>0){
      styleClass='header-md-screen'
    }
    return styleClass;
  }
  getImageFromService() {
    this.isImageLoading = true;
    this.uploadService.getUserFile(this.token.getUser().id).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;

    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
