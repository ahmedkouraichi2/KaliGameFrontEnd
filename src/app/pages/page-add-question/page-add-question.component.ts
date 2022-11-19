import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { Choix } from 'src/app/services/model/choix';
import { Langage } from 'src/app/services/model/langage';
import { Question } from 'src/app/services/model/question';
import { DomainHttpService } from 'src/app/services/serviceApi/email/domain-http.service';
import { LangageServiceHttpService } from 'src/app/services/serviceApi/email/langage-service-http.service';

@Component({
  selector: 'app-page-add-question',
  templateUrl: './page-add-question.component.html',
  styleUrls: ['./page-add-question.component.scss']
})
export class PageAddQuestionComponent implements OnInit {

 

  option: string;
  question: Question;
  choixSelect: Choix[];
  show: Boolean = false;
  constructor(
    private langageServiceHttp: LangageServiceHttpService,
    private domainService: DomainHttpService,
    public dialogRef: MatDialogRef<PageAddQuestionComponent>
  ) {}

  ngOnInit(): void {
    this.question = new Question(0, '', );
    this.question.langage = new Langage(1, 'Angular10');
    this.question.langage.id = this.domainService.id;
    this.question.choix = [];
  }
  save() {
    console.log(this.question);

    this.langageServiceHttp.addQuestion(this.question).subscribe((res: any) => {
      console.log(res);
      this.onferme();
    });
    //   let langage = new Langage(null, this.name);
    //   console.log(langage);
    //   this.langageServiceHttp.addDomaine(langage).subscribe((res: any) => {
    //     console.log(res);
    //     this.onNoClick();
    //   });
    //
  }

  saveChoix() {
    console.log(this.question);
   /*  let choix = new Choix(0, 'null', 'null', 'null');
    choix.description = this.option;
    choix.id = null;
    choix.questions = null;
    choix.correctResponse = false;
    this.question.choix.push(choix);
    this.option = null; */

    //   let langage = new Langage(null, this.name);
    //   console.log(langage);
    //   this.langageServiceHttp.addDomaine(langage).subscribe((res: any) => {
    //     console.log(res);
    //     this.onNoClick();
    //   });
    //
  }
  delete(id) {
    console.log(id);
    console.log(this.question.choix.splice(id, 1));
    console.log(this.question.choix);
  }
  onferme(): void {
    this.dialogRef.close();
  }

  checkCheckBoxvalue(event, id) {
    console.log('-----------------------------------------');
    console.log(event.target.checked);
    if (event.target.checked) this.question.choix[id].correctResponse = true;
    else this.question.choix[id].correctResponse = false;
    console.log(this.question.choix[id]);
  }
  checkResp() {
    for (let i = 0; i < this.question.choix.length; i++) {
      if (this.question.choix[i].correctResponse) return true;
    }
    return false;
  }

 

  
}
