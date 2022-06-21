import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PageModalUserComponent} from "../page-modal-user/page-modal-user.component";

@Component({
  selector: 'app-page-utlilisateur',
  templateUrl: './page-utlilisateur.component.html',
  styleUrls: ['./page-utlilisateur.component.scss']
})
export class PageUtlilisateurComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    const dialogRef=this.dialog.open(PageModalUserComponent,{
      width:'400px'
    })
  }

}
