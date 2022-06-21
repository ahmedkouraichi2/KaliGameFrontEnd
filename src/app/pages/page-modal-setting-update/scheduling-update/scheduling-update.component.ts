import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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
  selector: 'app-scheduling-update',
  templateUrl: './scheduling-update.component.html',
  styleUrls: ['./scheduling-update.component.scss']
})
export class SchedulingUpdateComponent implements OnInit {

  @Output() tache=new EventEmitter<string>();
  @Input() tacheScheduiling:string;

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

  constructor( fb:FormBuilder) {
    this.toppings=fb.group({
      failure: false,
      setStateFail: false,
      success: false,
    })
  }
  ngOnInit(): void {
    console.log(this.tacheScheduiling);
  }


  sendScheduilingTache() {
    this.tache.emit(this.tacheScheduiling);
    console.log(this.tacheScheduiling)
  }
}
