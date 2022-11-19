import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/app/services/model/question';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator'
import { ActivatedRoute, Router } from '@angular/router';
import { DomainHttpService } from 'src/app/services/serviceApi/email/domain-http.service';
import { LangageServiceHttpService } from 'src/app/services/serviceApi/email/langage-service-http.service';
import { PageAddQuestionComponent } from '../page-add-question/page-add-question.component';
import { Langage } from 'src/app/services/model/langage';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { timeStamp } from 'console';
@Component({
  selector: 'app-page-question-quiz',
  templateUrl: './page-question-quiz.component.html',
  styleUrls: ['./page-question-quiz.component.scss']
})
export class PageQuestionQuizComponent implements OnInit {
  id1:string;
  idRouter :number;

  listLangage: Question[] = [];
  displayedColumns: string[] = ['question', 'reponse', 'UPDATE/DELETE'];
  dataSource = new MatTableDataSource<Question>();


  langageQuestion :Langage ;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private domainService: DomainHttpService,
    public dialog: MatDialog,
    private router: Router,
    private langageServiceHttp: LangageServiceHttpService,
    private  activatedRoute:ActivatedRoute
  ) {}

  ngOnInit() {

    

    this.id1 = this.activatedRoute.snapshot.params['id'];
    this.idRouter=parseInt(this.id1);

     console.log("mon id",this.idRouter)

     this.domainService.id = this.idRouter;
    console.log("lol",this.domainService.id);

/*    this.langageQuestion =this.langageServiceHttp.getDomaineParId(this.idRouter);
 */    
    this.dataSource.filterPredicate = function (data:any, filter: string): boolean {
      return data.question.toLowerCase().includes(filter) || data.question.toLowerCase().includes(filter);
    };
    this.langageServiceHttp.getQuestions(this.idRouter).subscribe((res: any) => {
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
    const dialogRef = this.dialog.open(PageAddQuestionComponent, {
      height: '90vh',
      width: '70%',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      this.ngOnInit();
      this.ngAfterViewInit();
    });
  }

  delete(id:any) {
    console.log(id);
    const dialogRef = this.dialog.open(PageAddQuestionComponent, {
      height: '200px',
      width: '600px',
      data: { id: id, service: 'QuizQuestionComponent' },
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      this.ngOnInit();
      this.ngAfterViewInit();
    });
  }

  edit(id:any, name:any) {

  }

  toQuestions(id:any) {
    this.domainService.id = id;
    this.router.navigate(['/list-question']);
  }

}
