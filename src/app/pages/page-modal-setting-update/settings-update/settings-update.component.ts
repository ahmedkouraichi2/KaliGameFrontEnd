import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface Bulletin{
  value:string;
  viewValue:string;
}
interface Status{
  value:string;
  viewValue:string;
}
interface Type{
  value:string;
  viewValue:string
}
@Component({
  selector: 'app-settings-update',
  templateUrl: './settings-update.component.html',
  styleUrls: ['./settings-update.component.scss']
})
export class SettingsUpdateComponent implements OnInit {

  @Output()name=new EventEmitter<string>();
  @Output() Status=new EventEmitter<string>();
  @Output() type=new EventEmitter<string>();
  @Input() typeProcess:string;
  @Input() nameProcess:string;
  @Input() statusProcess:string;
  selectedType:string;
  statusForm:FormGroup;
  typeForm:FormGroup;
  settingForm:FormGroup;
  selectedValue:string="PRÉVENIR";
  toppings:FormGroup;
  bulletins:Bulletin[]=[
    {value:'PRÉVENIR', viewValue:'PRÉVENIR'},
    {value:'DEBUG', viewValue:'DÉBOGUER'},
    {value:'INFO', viewValue:'INFO'},
    {value:'ERREUR', viewValue:'ERREUR'},
    {value:'RIEN', viewValue:'RIEN'}
  ]
  status:Status[]=[
    {value:'Actif',viewValue:'Actif'},
    {value:'Inactif',viewValue:'Inactif'}
  ]
  types:Type[]=[
    {value:'BD',viewValue:'BD'},
    {value:'WEB',viewValue:'WEB'},
    {value:'FS',viewValue:'FS'}
  ]

  constructor( fb:FormBuilder) {
    this.toppings=fb.group({
      failure: false,
      setStateFail: false,
      success: false,
    })
    this.typeForm=fb.group({
      type:this.typeProcess
    })
    this.statusForm=fb.group({
      Stat:this.typeProcess
    })

    this.selectedType=this.typeProcess
    this.initForm();

  }

  ngOnInit(): void {
  }
  sendSettingName(){
    this.name.emit(this.nameProcess);
  }
  sendSettingStatus(){
    console.log(this.statusProcess);
    this.Status.emit(this.statusProcess);
  }
  initForm() {
    this.settingForm = new FormGroup({
      name: new FormControl(''),
    })
  }
  sendSettingType(){
    console.log(this.typeProcess);
    this.type.emit(this.typeProcess);
  }
}
