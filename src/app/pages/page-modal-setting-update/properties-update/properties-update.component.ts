import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddPropertyComponent} from "../../page-modal-setting/add-property/add-property.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-properties-update',
  templateUrl: './properties-update.component.html',
  styleUrls: ['./properties-update.component.scss']
})
export class PropertiesUpdateComponent implements OnInit,AfterViewInit {
  @Output()ValeurSuivre=new EventEmitter<string>();
  @Input() proprieteValueSuivre:string;
  displayedColumns: string[] = ['property', 'value'];
  /*dataSource = ELEMENT_DATA;*/
  proprieteForm: FormGroup;
  dataSource :Element[]=[
    {property:'Valeur a suivre', value:''},
    {property:'Fenêtre de temps',value:''},
    {property:'Longueur de la sous-fenêtre',value:''}
  ];
  constructor(public dialog: MatDialog) {

  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.dataSource[0].value=this.proprieteValueSuivre;
      console.log('test='+this.dataSource[1].value);
    },0)
  }

  ngOnInit(): void {
    this.initForm();
  }

  openDialog(): void {
    this.dialog.open(AddPropertyComponent, {
      width: '350px'
    });
  }
  sendProprieteValuerSuivre(){
    this.ValeurSuivre.emit( this.proprieteForm.value.valeurSuivre)
    console.log( this.proprieteForm.value.valeurSuivre)
  }
  initForm(){
    this.proprieteForm=new FormGroup({
      valeurSuivre:new FormControl(''),
      fenetreTemps:new FormControl(''),
      longeurFenetre:new FormControl(''),
    })
  }
}


export interface Element{
  property:string;
  value:string
}


/*const ELEMENT_DATA :Element[]=[
  {property:'Valeur a suivre', value:''},
  {property:'Fenêtre de temps',value:''},
  {property:'Longueur de la sous-fenêtre',value:''}
];*/
