import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LangageServiceHttpService } from 'src/app/services/serviceApi/email/langage-service-http.service';

@Component({
  selector: 'app-page-delete-domaine',
  templateUrl: './page-delete-domaine.component.html',
  styleUrls: ['./page-delete-domaine.component.scss']
})
export class PageDeleteDomaineComponent implements OnInit {
  constructor(
    private langageServiceHttp: LangageServiceHttpService,
    public dialogRef: MatDialogRef<PageDeleteDomaineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
  delete() {
    if (this.data.service === 'QuestionListComponent') {
      this.langageServiceHttp.deleteDomaine(this.data.id).subscribe((res: any) => {
        console.log(res);
        this.onNoClick();
      });
    } else {
      this.langageServiceHttp.deleteQuestion(this.data.id).subscribe((res: any) => {
        console.log(res);
        this.onNoClick();
      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}







