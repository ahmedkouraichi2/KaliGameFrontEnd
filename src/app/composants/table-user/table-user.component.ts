import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../../services/model/User";
import {UserServiceService} from "../../services/serviceApi/user/user-service.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Processor} from "../../services/model/Processor";
import {ProcessorServiceService} from "../../services/serviceApi/processor/processor-service.service";
import {
  PageModalSettingUpdateComponent
} from "../../pages/page-modal-setting-update/page-modal-setting-update.component";
import {ThemePalette} from "@angular/material/core";
import {PageModalDeleteUserComponent} from "../../pages/page-modal-delete-user/page-modal-delete-user.component";
import {PageModalUserUpdateComponent} from "../../pages/page-modal-user-update/page-modal-user-update.component";

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent implements OnInit,OnDestroy {

  color: ThemePalette = 'warn';
  private subs = new Subscription();
  displayedColumns: string[] = ["firstName", "lastName","email","role","status", "actions"];
  public dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private dataArray:any;
  constructor(private userService:UserServiceService,private _snackBar:MatSnackBar,public dialog: MatDialog ) {
  }
  ngOnInit(): void {
    this.subs.add(this.userService.listUser()
      .subscribe((res)=>{

        this.dataArray=res;
        this.dataSource=new MatTableDataSource<User>(this.dataArray);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },(err:HttpErrorResponse)=>{
        console.log(err);
      }))
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  public openRecord(id:number,name:string):void{
    this._snackBar.open(`Record ${id} ${name}`,'close',{
      horizontalPosition:'center',
      verticalPosition:'top',
    })  };

  removeRow(id){
    this.userService.supprimerUser(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((u:User)=>u.id!==id)
    })
  }
  openDialog( row) {
    this.dataArray=row
    const dialogRef = this.dialog.open(PageModalUserUpdateComponent,{
      width:'400px',
      data:{
        user:this.dataArray
      }
    }).afterClosed().subscribe(resultat=>{
      this.userService.listUser().subscribe((data)=>{
        this.dataSource=new  MatTableDataSource<User>(data)
      })
    })
  }
  openDialogDelete(row):void{
    this.dataArray.id=row.id
    this.dialog.open(PageModalDeleteUserComponent,{
      width:'400px',
      data:{
        id:this.dataArray.id
      }
    }).afterClosed().subscribe(resultat=>{
      this.userService.listUser().subscribe((data)=>{
        this.dataSource=new MatTableDataSource<User>(data)
      })
    })
  }

}
