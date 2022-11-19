import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpenDialogComponent } from '../open-dialog/open-dialog.component';
import { TutoInfoExamComponent } from '../tuto-info-exam/tuto-info-exam.component';
import { MatDialog } from '@angular/material/dialog';
import { DashboardServiceHttpService } from '../services/dashboard-service-http.service';

@Component({
  selector: 'app-dashbord-exam',
  templateUrl: './dashbord-exam.component.html',
  styleUrls: ['./dashbord-exam.component.scss']
})
export class DashbordExamComponent implements OnInit {

  dash: string = '';
  date1 = new Date();

  @ViewChild('candidat') nameKey!: ElementRef;
  id: number;
  constructor(
    private dashboardServiceHttp: DashboardServiceHttpService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dashboardServiceHttp.setId(this.id);
    this.getDateExpiration();
  }

  submit() {
    // this.router.navigate(['/question']);
    this.router.navigate(['/TestKaligame']);
  }
  startQuiz() {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
  openDialog() {
    const dialogRef = this.dialog.open(OpenDialogComponent, {
      height: '100%',
      width: '100%',
      disableClose: true,
      panelClass: 'full-screen-modal',
    });
  }

  getDateExpiration() {


  }

  submitLoading(){
    this.router.navigate(['/loading']);

  }

  openDialogTuto(){
    this.dialog.open(TutoInfoExamComponent);

}

}
