import {Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {EStore} from "@fireflysemantics/slice";
import {Observable, Subscription} from "rxjs";
import {untilDestroyed} from "ngx-take-until-destroy";
import {Processor} from "../../services/model/Processor";
import {ProcessorServiceService} from "../../services/serviceApi/processor/processor-service.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";
import {PageModalSettingComponent} from "../../pages/page-modal-setting/page-modal-setting.component";
import {MatDialog} from "@angular/material/dialog";
import {
  PageModalSettingUpdateComponent
} from "../../pages/page-modal-setting-update/page-modal-setting-update.component";
import {AuthService} from "../../services/auth.service";
import {User} from "../../services/model/User";
import {TokenStorageService} from "../../services/token-storage.service";
import {AddPropertyComponent} from "../../pages/page-modal-setting/add-property/add-property.component";
import {PageModalDeleteComponent} from "../../pages/page-modal-delete/page-modal-delete.component";
import { ThemePalette } from '@angular/material/core';
import {Planification} from "../../services/model/Planification";
import {Propriete} from "../../services/model/Propriete";
import {Reglage} from "../../services/model/Reglage";
import {Commentaire} from "../../services/model/Commentaire";
import { LangageServiceHttpService } from 'src/app/services/serviceApi/email/langage-service-http.service';
import { DomainHttpService } from 'src/app/services/serviceApi/email/domain-http.service';
import { Langage } from 'src/app/services/model/langage';

@Component({
  selector: 'app-table-connecor',
  templateUrl: './table-connecor.component.html',
  styleUrls: ['./table-connecor.component.scss']
})
export class TableConnecorComponent implements OnInit,OnDestroy  {


   domaines:Langage[]=[];
  private subs = new Subscription();
  displayedColumns: string[] = ["id", "name", "actions"];
  public dataSource: MatTableDataSource<Langage>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private dataArray:any;
/*   currentUser: User;
  newCollector = new Processor();
  newPlanification = new Planification();
  newPropriete = new Propriete();
  newReglage = new Reglage();
  newCommentaire= new Commentaire(); */
  constructor(private token: TokenStorageService,private langageServiceHttpService :LangageServiceHttpService,private domainHttpService : DomainHttpService,private _snackBar:MatSnackBar,public dialog: MatDialog) {

  }
  ngOnInit(): void {

    this.subs.add(this.domainHttpService.getLangages()
      .subscribe((res)=>{
        this.dataArray=res;
        console.log(this.dataArray);
        this.dataSource=new MatTableDataSource<Langage>(this.dataArray);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },(err:HttpErrorResponse)=>{
        console.log(err);
      }))

  }

  ngOnDestroy(): void {

     

  }

}
