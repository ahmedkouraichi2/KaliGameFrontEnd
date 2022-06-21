import {Component, Inject, OnInit} from '@angular/core';
import {Processor} from "../../services/model/Processor";
import {ProcessorServiceService} from "../../services/serviceApi/processor/processor-service.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-page-modal-delete',
  templateUrl: './page-modal-delete.component.html',
  styleUrls: ['./page-modal-delete.component.scss']
})
export class PageModalDeleteComponent implements OnInit {
  public dataSource: MatTableDataSource<Processor>;
  currentProcessor=new Processor();
  constructor(private processorService:ProcessorServiceService,@Inject(MAT_DIALOG_DATA) public data: any ) {
    this.currentProcessor.id=this.data.id
    this.dataSource=this.data.data
  }

  ngOnInit(): void {
  }
  removeRow(){
    this.processorService.supprimerProcessor(this.currentProcessor.id).subscribe(
      ()=>{
        this.dataSource.data=this.dataSource.data.filter((p:Processor)=>p.id!==this.currentProcessor.id)
      }
    )

  }
}
