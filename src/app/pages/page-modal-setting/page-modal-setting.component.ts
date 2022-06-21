import {ChangeDetectorRef, Component, Inject, OnInit, Optional, TemplateRef} from '@angular/core';
import {ProcessorServiceService} from "../../services/serviceApi/processor/processor-service.service";
import {Processor} from "../../services/model/Processor";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Planification} from "../../services/model/Planification";
import {Commentaire} from "../../services/model/Commentaire";
import {Propriete} from "../../services/model/Propriete";

@Component({
  selector: 'app-page-modal-setting',
  templateUrl: 'page-modal-setting.component.html',
  styleUrls: ['page-modal-setting.component.scss']
})
export class PageModalSettingComponent implements OnInit {
  newProcessor=new Processor();
  newPlanification=new Planification()
  newCommentaire=new Commentaire();
  newPropriete=new Propriete();
  contentTemplate: TemplateRef<any>;

  constructor(private  processorservice:ProcessorServiceService,private router:Router,@Inject(MAT_DIALOG_DATA) public data: any ) {
    this.newProcessor.type=this.data.type;
    // console.log("test "+this.newProcessor.type)
  }
  addProcessor(){
    console.log(this.newProcessor.name)
    console.log(this.newProcessor.status)
    console.log(this.newProcessor.type)
    console.log( this.newPlanification.tachesSimultanees)/*
    this.newProcessor.planification=this.newPlanification*/

    this.processorservice.ajouterProcessor(this.newProcessor).subscribe(proc=>{
      console.log(proc);
      window.location.reload();
    })

  }
  ngOnInit(): void {
   /* console.log(this.data.type);*/
  }

  setSettingName($event){
    this.newProcessor.name=$event;
  }

  setSettingStatus($event){
    this.newProcessor.status=$event;
  }

  setSchedulingTache($event) {
    this.newPlanification.tachesSimultanees=$event
    this.newProcessor.planification=this.newPlanification
    console.log( $event)
  }

  setCommentaire($event: string) {
    this.newCommentaire.commentaire=$event
    this.newProcessor.commentaire=this.newCommentaire
  }

  setValeurSuivre($event: string) {
    this.newPropriete.valeurSuivre=$event
    this.newProcessor.propriete=this.newPropriete

  }

  SetUrl($event: string) {
    this.newPropriete.url=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setDeep($event: number) {
    this.newPropriete.deep=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setSiteMap($event: string) {
    this.newPropriete.siteMap=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setFilter($event: string) {
    this.newPropriete.filter=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setInputDirectory($event: string) {
    this.newPropriete.inputDirectory=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setFileFilter($event: string) {
    this.newPropriete.pathFilter=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setPathSize($event: string) {
    this.newPropriete.pathFilter=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setBathZise($event: number) {
    this.newPropriete.batchSize=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setSubDirectorie($event: boolean) {
    this.newPropriete.subDirectories=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setIgnoreHiddentFiles($event: boolean) {
    this.newPropriete.ignoreHiddenFiles=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setMinimumFileAge($event: number) {
    this.newPropriete.minimumFileAge=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setMaximumFileAge($event: number) {
    this.newPropriete.maximunFileAge=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setMinumumFileSize($event: number) {
    this.newPropriete.minimumFileSize=$event
    this.newProcessor.propriete=this.newPropriete
  }

  setMaximumFileSize($event: number) {
    this.newPropriete.maximumFileSize=$event
    this.newProcessor.propriete=this.newPropriete
  }
  setUser($event: string) {
    this.newPropriete.user=$event
    this.newProcessor.propriete=this.newPropriete
  }
  setPassword($event: string) {
    this.newPropriete.password=$event
    this.newProcessor.propriete=this.newPropriete
  }
  setObject($event: string) {
    this.newPropriete.object=$event
    this.newProcessor.propriete=this.newPropriete
  }
  setField($event: string) {
    this.newPropriete.fields=$event
    this.newProcessor.propriete=this.newPropriete
  }
  setClause($event: string) {
    this.newPropriete.clause=$event
    this.newProcessor.propriete=this.newPropriete
  }
}
