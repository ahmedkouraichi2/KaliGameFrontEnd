import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Processor} from "../../services/model/Processor";
import {ProcessorServiceService} from "../../services/serviceApi/processor/processor-service.service";
import { Subscription } from 'rxjs';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit,OnDestroy{

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


