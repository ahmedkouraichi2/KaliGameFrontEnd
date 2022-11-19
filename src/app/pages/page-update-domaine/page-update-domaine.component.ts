import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Langage } from 'src/app/services/model/langage';
import { LangageServiceHttpService } from 'src/app/services/serviceApi/email/langage-service-http.service';

@Component({
  selector: 'app-page-update-domaine',
  templateUrl: './page-update-domaine.component.html',
  styleUrls: ['./page-update-domaine.component.scss']
})
export class PageUpdateDomaineComponent implements OnInit {


  constructor(
    private langageServiceHttp: LangageServiceHttpService,
    public dialogRef: MatDialogRef<PageUpdateDomaineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
  changer() {
    this.langageServiceHttp.editDomaine(this.data.lg).subscribe((res: any) => {
      console.log(res);
      console.log(res);


    });
    this.fermer();
  }
  fermer(): void {
    this.dialogRef.close();
  }
}

  


