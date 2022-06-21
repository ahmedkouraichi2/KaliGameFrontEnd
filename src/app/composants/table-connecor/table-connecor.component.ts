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

@Component({
  selector: 'app-table-connecor',
  templateUrl: './table-connecor.component.html',
  styleUrls: ['./table-connecor.component.scss']
})
export class TableConnecorComponent implements OnInit,OnDestroy  {



  private subs = new Subscription();
  displayedColumns: string[] = ["connecteur", "type","dateCreation","dateModification","status", "actions"];
  public dataSource: MatTableDataSource<Processor>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private dataArray:any;
  currentUser: User;
  newCollector = new Processor();
  newPlanification = new Planification();
  newPropriete = new Propriete();
  newReglage = new Reglage();
  newCommentaire= new Commentaire();
  constructor(private token: TokenStorageService,private processorService:ProcessorServiceService,private _snackBar:MatSnackBar,public dialog: MatDialog) {

  }
  ngOnInit(): void {

    this.subs.add(this.processorService.listProcessor()
      .subscribe((res)=>{
        this.dataArray=res;
        console.log(this.dataArray);
        this.dataSource=new MatTableDataSource<Processor>(this.dataArray);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },(err:HttpErrorResponse)=>{
        console.log(err);
      }))
  }

  ngOnDestroy(): void {

      this.subs.unsubscribe();

  }
  public openRecord(id:number,name:string):void{
    this._snackBar.open(`Record ${id} ${name}`,'close',{
      horizontalPosition:'center',
      verticalPosition:'top',
    })  };

  removeRow(id){
    this.processorService.supprimerProcessor(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((p:Processor)=>p.id!==id)
    })
  }

  openDialog( row) {
    this.dataArray.id=row.id
    const dialogRef = this.dialog.open(PageModalSettingUpdateComponent,{
      width:'700px',
      data:{
        id:this.dataArray.id,
        data:this.dataSource
      }
    }).afterClosed().subscribe(resultat=>{
      this.processorService.listProcessor().subscribe((data)=>{
        this.dataSource=new MatTableDataSource<Processor>(data)
      })
    });

}
  openDialogDelete(row):void{
    this.dataArray.id=row.id
    this.dialog.open(PageModalDeleteComponent,{
      width:'400px',
      data:{
        id:this.dataArray.id
      }
    }).afterClosed().subscribe(resultat=>{
      this.processorService.listProcessor().subscribe((data)=>{
        this.dataSource=new MatTableDataSource<Processor>(data)
      })
  })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  play(row){
    row.status="Actif"
    this.processorService.updateProcessor(row,row.id).subscribe(proc=>{
      console.log(proc);
      // window.location.reload();
    })
    console.log(row)
  }
  stop(row){
    row.status="Inactif"
    this.processorService.updateProcessor(row,row.id).subscribe(proc=>{
      console.log(proc);
      // window.location.reload();
    })
    console.log(row)
  }


  clone(row) {
    this.newCollector.name=row.name;
    this.newCollector.status=row.status;
    this.newCollector.type=row.type;
/*    this.newCollector.propriete=row.propriete;
    this.newCollector.commentaire=row.commentaire;
    this.newCollector.reglage=row.reglage;
    this.newCollector.planification=row.planification;*/
    this.newPropriete.inputDirectory=row.propriete.inputDirectory;
    this.newPropriete.fileFilter=row.propriete.fileFilter;
    this.newPropriete.pathFilter=row.propriete.pathFilter;
    this.newPropriete.batchSize=row.propriete.batchSize;
    this.newPropriete.subDirectories=row.propriete.subDirectories;
    this.newPropriete.ignoreHiddenFiles=row.propriete.ignoreHiddenFiles;
    this.newPropriete.minimumFileAge=row.propriete.minimumFileAge;
    this.newPropriete.maximunFileAge=row.propriete.maximunFileAge;
    this.newPropriete.minimumFileSize=row.propriete.minimumFileSize;
    this.newPropriete.maximumFileSize=row.propriete.maximumFileSize;
    this.newPropriete.url=row.propriete.url;
    this.newPropriete.user=row.propriete.user;
    this.newPropriete.object=row.propriete.object;
    this.newPropriete.fields=row.propriete.fields;
    this.newPropriete.clause=row.propriete.clause;
    this.newPropriete.deep=row.propriete.deep;
    this.newPropriete.siteMap=row.propriete.siteMap;
    this.newPropriete.filter=row.propriete.filter;
    this.newCollector.propriete=this.newPropriete;

    this.newPlanification.strategiePlanification=row.planification.strategiePlanification;
    this.newPlanification.tachesSimultanees=row.planification.tachesSimultanees;
    this.newPlanification.execution=row.planification.execution;
    this.newPlanification.programmeDExecution=row.planification.programmeDExecution;
    this.newCollector.planification=this.newPlanification;

    this.newCommentaire.commentaire=row.commentaire.commentaire;
    this.newCollector.commentaire=this.newCommentaire;

    this.newReglage.name=row.reglage.name;
    this.newReglage.autorise=row.reglage.autorise;
    this.newReglage.dureePenalite=row.reglage.dureePenalite;
    this.newReglage.dureeRendement=row.reglage.dureeRendement;
    this.newCollector.reglage=this.newReglage;

    console.log(row)

    this.processorService.ajouterProcessor(this.newCollector).subscribe(proc=>{
      console.log(proc);
      window.location.reload();
    })

  }
}
