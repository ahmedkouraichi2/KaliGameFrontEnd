import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {Processor} from "../../services/model/Processor";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ProcessorServiceService} from "../../services/serviceApi/processor/processor-service.service";
/*import {MatSnackBar} from "@angular/material/snack-bar";*/
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-page-aide',
  templateUrl: './page-aide.component.html',
  styleUrls: ['./page-aide.component.scss']
})
export class PageAideComponent implements OnInit ,OnDestroy{

  private subs = new Subscription();
  displayedColumns: string[] = ["connecteur", "type","dateCreation","status", "actions"];
  public dataSource: MatTableDataSource<Processor>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private dataArray:any;
  constructor(private processorService:ProcessorServiceService,private _snackBar:MatSnackBar) {
  }
  ngOnInit(): void {
    this.subs.add(this.processorService.listProcessor()
      .subscribe((res)=>{
        console.log(res);
        this.dataArray=res;
        this.dataSource=new MatTableDataSource<Processor>(this.dataArray);
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




}
