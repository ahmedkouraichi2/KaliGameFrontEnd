import { Component, OnInit } from '@angular/core';

import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Langage } from 'src/app/services/model/langage';
import { LangageServiceHttpService } from 'src/app/services/serviceApi/email/langage-service-http.service';


@Component({
  selector: 'app-page-add-domaine',
  templateUrl: './page-add-domaine.component.html',
  styleUrls: ['./page-add-domaine.component.scss']
})
export class PageAddDomaineComponent implements OnInit {

  langage: Langage = new Langage(0,"");

  constructor(
    private langageServiceHttp: LangageServiceHttpService,
    public ferme: MatDialogRef<PageAddDomaineComponent>,
    private snakebar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  addNameDomaine(){
    let idDomaine=  Math.floor(Math.random() * 1000) + 1;
    this.langage = new Langage(idDomaine,this.langage.name)
    if(this.langage.name==null||this.langage.name.trim()==''){
       this.snakebar.open("title can't be empty","ok",{duration:3000});
       return;
    }



    this.langageServiceHttp.addDomaine(this.langage).subscribe(
      (data)=>{
        console.log("domaine  data from backend-end is "+data);


      },
      (error)=>{
        //console.log(error);
        console.log("lol")
      }
    )
  }

  onFerme(): void {
    this.ferme.close();
  }


}
