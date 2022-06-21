import {Component, Inject, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../../services/model/User";
import {ProcessorServiceService} from "../../services/serviceApi/processor/processor-service.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserServiceService} from "../../services/serviceApi/user/user-service.service";

@Component({
  selector: 'app-page-modal-delete-user',
  templateUrl: './page-modal-delete-user.component.html',
  styleUrls: ['./page-modal-delete-user.component.scss']
})
export class PageModalDeleteUserComponent implements OnInit {
  public  dataSource:MatTableDataSource<User>;
  curentUser=new User();

  constructor(private userService:UserServiceService,@Inject(MAT_DIALOG_DATA) public data: any ) {
    this.curentUser.id=this.data.id;
    this.dataSource=this.data.data;
  }

  ngOnInit(): void {
  }
  removeRow(){
    this.userService.supprimerUser(this.curentUser.id).subscribe(
      ()=>{
        this.dataSource.data=this.dataSource.data.filter((u:User)=>u.id!==this.curentUser.id)
      }
    )
  }

}
