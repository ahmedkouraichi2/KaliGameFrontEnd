import { Component,Input, OnInit } from '@angular/core';
import { Regle } from 'src/app/services/model/regle.model';

@Component({
  selector: 'app-tuto-deatils',
  templateUrl: './tuto-deatils.component.html',
  styleUrls: ['./tuto-deatils.component.scss']
})
export class TutoDeatilsComponent implements OnInit {
  @Input() regle!: Regle;

  constructor() { }

  ngOnInit(): void {
  }

}
