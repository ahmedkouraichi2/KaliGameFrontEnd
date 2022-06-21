import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PageModalDbComponent} from "../../pages/page-modal-db/page-modal-db.component";
import {PageModalFsComponent} from "../../pages/page-modal-fs/page-modal-fs.component";
import {PageModalWebComponent} from "../../pages/page-modal-web/page-modal-web.component";
import {PageModalSettingComponent} from "../../pages/page-modal-setting/page-modal-setting.component";
;
@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent  {

  constructor(public dialog: MatDialog) {}

  openDialogFs() {
    const dialogRef = this.dialog.open(PageModalSettingComponent,{
      width:'700px',
      data:{
        type:"FS"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogBd() {
    const dialogRef = this.dialog.open(PageModalSettingComponent,{
      width:'700px',
      data:{
        type:"DB"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogWeb() {
    const dialogRef = this.dialog.open(PageModalSettingComponent,{
      width:'700px',
      data:{
        type:"WEB"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

