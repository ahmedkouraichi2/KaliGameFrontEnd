import {Component, Inject, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Processor} from "../../services/model/Processor";
import {ProcessorServiceService} from "../../services/serviceApi/processor/processor-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-page-modal-setting-update',
  templateUrl: './page-modal-setting-update.component.html',
  styleUrls: ['./page-modal-setting-update.component.scss']
})
export class PageModalSettingUpdateComponent implements OnInit{

  currentProcessor=new Processor();

  contentTemplate: TemplateRef<any>;

  constructor(private  processorservice:ProcessorServiceService,private router:Router,private matDialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any ) {
    this.currentProcessor.id=this.data.id;

  }

  updateProcessor(){
    console.log(this.currentProcessor.name)
    console.log(this.currentProcessor.status)
    console.log(this.currentProcessor.type)
    console.log(this.currentProcessor.id)
    this.processorservice.updateProcessor(this.currentProcessor,this.currentProcessor.id).subscribe(proc=>{
      console.log(proc);
    },(error => {alert("Probléme lors de la modification !")}))

  }
  ngOnInit(): void {

    this.processorservice.consulterProcessor(this.currentProcessor.id ).
    subscribe(proc=>{this.currentProcessor=proc;
    console.log(this.currentProcessor)})

  }

  setSettingName($event){
    this.currentProcessor.name=$event;
  }

  setSettingStatus($event){
    this.currentProcessor.status=$event;
  }

  closeDialog(){
    this.matDialog.closeAll();
  }

  SetScheduilingTache($event) {
    this.currentProcessor.planification.tachesSimultanees=$event
    console.log($event)
  }

  setCommentmessage($event) {
    this.currentProcessor.commentaire.commentaire=$event;
    console.log($event)
  }

  setValueSuivre($event) {
    this.currentProcessor.propriete.valeurSuivre=$event;
    console.log($event)
  }
}
