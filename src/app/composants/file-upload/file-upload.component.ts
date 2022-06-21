import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FileUploadService} from "../../services/serviceApi/file-update/file-upload.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  imageName:string;
  userFile:any;
  imagePath:any;
  imageSrc:string;
  constructor(private uploadService:FileUploadService) { }

  selectFile(event:any){
    if (event.target.files.length >0){
      this.selectedFiles=event.target.files;
      const file=event.target.files[0];
      console.log(file)
      this.imageName=file.name;
      this.userFile=file;
      var reader=new  FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(event)=>{
        this.imagePath=reader.result;
      }

    }
  }

  ngOnInit(): void {
/*    this.fileInfos=this.uploadService.getFiles();*/
  }
  /*upload(){
    this.progress=0;
    if(this.selectedFiles){
      const file:File|null=this.selectedFiles.item(0);
      if (file){

        this.currentFile=file;
        this.uploadService.upload( this.currentFile,this.).subscribe(
          (event:any)=>{

            if(event.type===HttpEventType.UploadProgress){
              this.progress=Math.round(100*event.loader/event.total)
            }else  if(event instanceof HttpResponse){
              this.message=event.body.message;
              this.fileInfos=this.uploadService.uploadImage(file.name);
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
*/
}
