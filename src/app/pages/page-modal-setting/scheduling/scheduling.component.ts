import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface Bulletin{
  value:string;
  viewValue:string;
}
interface Scheduling{
  value:string;
  viewValue:string;
}
interface Execution{
  value:string,
  viewValue:string
}
@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {
  @Output()tache=new EventEmitter<string>();
  schedulingTache:string;

  selectedValue:string="PRÉVENIR";
  selectedScheduling:string="Minuterie pilotée";
  selectedExecution:string="Tous les noeuds";
  executions:Execution[]=[{
      value:'Tous les noeuds', viewValue: 'Tous les noeuds'
    },
    {
      value:'Noeud principal', viewValue:'Noeud principal'
    }
  ]
  schedulings:Scheduling[]=[{
    value:'Minuterie pilotée',viewValue:'Minuterie pilotée'
    },
    {
      value:'CRON driven',viewValue:'Piloté par CRON'
    }
  ]
  toppings:FormGroup;
  bulletins:Bulletin[]=[
    {value:'PRÉVENIR', viewValue:'PRÉVENIR'},
    {value:'DEBUG', viewValue:'DÉBOGUER'},
    {value:'INFO', viewValue:'INFO'},
    {value:'ERREUR', viewValue:'ERREUR'},
    {value:'RIEN', viewValue:'RIEN'}

  ]
   schedulingForm: FormGroup;

  constructor( fb:FormBuilder) {
    this.toppings=fb.group({
      failure: false,
      setStateFail: false,
      success: false,
    })
  }
  ngOnInit(): void {
    this.initForm();
  }


  sendSchedulingTache() {
    this.tache.emit(this.schedulingTache)
    console.log( this.tache)
  }
  initForm() {
    this.schedulingForm = new FormGroup({
      tache : new FormControl(''),

    })
  }
}
