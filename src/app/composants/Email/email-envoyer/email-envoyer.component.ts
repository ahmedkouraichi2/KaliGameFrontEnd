import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-email-envoyer',
  templateUrl: './email-envoyer.component.html',
  styleUrls: ['./email-envoyer.component.scss']
})
export class EmailEnvoyerComponent implements OnInit {
  email :string =''; 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  
  private dialogRef: MatDialog
  ) {}

ngOnInit(): void {
  this.email = this.data.string;
}

fermer(){
 this.dialogRef.closeAll();
}

}

