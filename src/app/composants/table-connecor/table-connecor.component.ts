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
import { Router } from '@angular/router';
import { ModalComponent, ModalHeaderComponent } from 'ng-cdbangular';
import { PageDeleteDomaineComponent } from 'src/app/pages/page-delete-domaine/page-delete-domaine.component';
import {PageUpdateDomaineComponent} from 'src/app/pages/page-update-domaine/page-update-domaine.component';
@Component({
  selector: 'app-table-connecor',
  templateUrl: './table-connecor.component.html',
  styleUrls: ['./table-connecor.component.scss']
})
export class TableConnecorComponent implements OnInit,OnDestroy  {

  numDomaine :Observable<number>;
  listLangage: Langage[] = [];
  displayedColumns: string[] = ['name', 'UPDATE/DELETE'];
  dataSource = new MatTableDataSource<Langage>();
  @ViewChild(MatPaginator) paginator: MatPaginator;


  private subs = new Subscription();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private dataArray:any;
  currentUser: User;
  newDomaine = new Processor();
  newPlanification = new Planification();
  newPropriete = new Propriete();
  newReglage = new Reglage();
  newCommentaire= new Commentaire();
  constructor(private token: TokenStorageService,private langageServiceHttpService :LangageServiceHttpService,private domainHttpService : DomainHttpService,private _snackBar:MatSnackBar,public dialog: MatDialog,private router:Router) {

  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {

    const newLocal = this;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.name.toLowerCase().includes(filter);
    };
    this.domainHttpService.getLangages().subscribe((res: any) => {
      this.listLangage = res;
      console.log(this.listLangage);
      this.dataSource.data = this.listLangage;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  add() {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '450px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      this.ngAfterViewInit();
    });
  }

  delete(id) {
    console.log(id);

    const dialogRef = this.dialog.open(PageDeleteDomaineComponent, {
      height: '200px',
      width: '600px',
      data: { id: id, service: 'QuestionListComponent' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      this.ngAfterViewInit();
    });
  }

  edit(id, name) {
    let langage = new Langage(id, name);
    console.log(langage);
    const dialogRefEdit = this.dialog.open(PageUpdateDomaineComponent , {
      height: '200',
      width: '600px',
      data: { lg: langage },
    });

    dialogRefEdit.afterClosed().subscribe((result) => {
      this.ngOnInit();
      this.ngAfterViewInit();
    });
  }
  toQuestions(id) {
    this.domainHttpService.id = id;
    this.router.navigate(['/dashboard/question/1']);
  }

}


