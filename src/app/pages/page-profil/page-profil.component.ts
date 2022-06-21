import { Component, OnInit } from '@angular/core';
import {User} from "../../services/model/User";
import {TokenStorageService} from "../../services/token-storage.service";
import {UserServiceService} from "../../services/serviceApi/user/user-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {FileUploadService} from "../../services/serviceApi/file-update/file-upload.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {

  id:any;
  userUpdate=new User();
  profilForm: FormGroup;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  userFile:any;
  imagePath:any
  isImageLoading:any;
  imageToShow: any;

  constructor(private token: TokenStorageService, private userService:UserServiceService,private uploadService:FileUploadService) { }

  ngOnInit(): void {
    this.initForm();
    this.id = this.token.getUser().id;

    this.userService.consulterUser(this.id).
    subscribe(user=>{
      this.userUpdate=user;
    })
    this. getImageFromService();


    console.log( )
  }
  initForm() {
    this.profilForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl('')
    })
  }
  updateUser(){
    this.userService.updateUser(this.userUpdate).subscribe(
      user=>{
        console.log(user);
      },(error => {alert("probléme lors de la modification !")})
    )
  }
  selectFile(event:any){
    if (event.target.files.length >0){
      this.selectedFiles=event.target.files;
      const file=event.target.files[0];
      this.userFile=file;
      var reader=new  FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(event)=>{
        this.imagePath=reader.result;
      }
  }}

  upload(){
    this.progress=0;
    if(this.selectedFiles){
      const file:File|null=this.selectedFiles.item(0);
      if (file){

        this.currentFile=file;
        this.uploadService.upload( this.currentFile,this.userUpdate.id).subscribe(
          (event:any)=>{

            if(event.type===HttpEventType.UploadProgress){
              this.progress=Math.round(100*event.loader/event.total)
            }else  if(event instanceof HttpResponse){
              this.message=event.body.message;
              this.fileInfos=this.uploadService.uploadImage(file.name);
              this. getImageFromService();
              window.location.reload();
            }
          },(err :any)=>{
            console.log(err);
            this.progress=0;
            if(err.error && err.error.message){
              this.message=err.error.message;
            }else {
              this.message="could not upload the file!";
            }
            this.currentFile=undefined;
          }
        );
      }
      this.selectedFiles=undefined;
    }
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
}
