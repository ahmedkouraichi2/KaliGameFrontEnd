import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageAddQuestionComponent } from 'src/app/pages/page-add-question/page-add-question.component';

@Component({
  selector: 'app-button-action-question',
  templateUrl: './button-action-question.component.html',
  styleUrls: ['./button-action-question.component.scss']
})
export class ButtonActionQuestionComponent implements OnInit {

  
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialogQuestion() {
    const dialogRef = this.dialog.open(PageAddQuestionComponent,{
      width:'1000px',
      
     
    });



  }
 

}
