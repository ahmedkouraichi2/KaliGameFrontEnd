import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { PageAddDomaineComponent } from 'src/app/pages/page-add-domaine/page-add-domaine.component';
;
@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent  {

  constructor(public dialog: MatDialog) {}

  openDialogFs() {
    const dialogRef = this.dialog.open(PageAddDomaineComponent,{
      width:'700px',
      data:{
        type:"FS"
      }
    });



  }

}



