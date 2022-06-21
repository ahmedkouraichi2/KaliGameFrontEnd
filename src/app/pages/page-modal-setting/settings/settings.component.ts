import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
interface Bulletin{
  value:string;
  viewValue:string;
}
interface Status{
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Output()name=new EventEmitter<string>();
  settingName:string;
  @Output() etat=new EventEmitter<string>();
  selectedStatus:string="Actif";
  @Input() type:string;
  statusForm:FormGroup=new FormGroup({});
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



  constructor( fb:FormBuilder) {
    this.toppings=fb.group({
      failure: false,
      setStateFail: false,
      success: false,
    })
    this.settingForm=fb.group({
      status:[this.selectedStatus]
    })
    this.initForm();

  }

  ngOnInit(): void {
  }
  sendSettingName(){
    this.name.emit(this.settingName);
  }
  sendSettingStatus(){
    console.log(this.selectedStatus);
    this.etat.emit(this.selectedStatus);
  }
  initForm() {
    this.settingForm = new FormGroup({
      name: new FormControl(''),
      etat: new FormControl('Actif')
    })
  }


}
