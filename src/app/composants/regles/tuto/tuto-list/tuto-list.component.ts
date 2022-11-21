import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Regle } from 'src/app/services/model/regle.model';

@Component({
  selector: 'app-tuto-list',
  templateUrl: './tuto-list.component.html',
  styleUrls: ['./tuto-list.component.scss']
})
export class TutoListComponent implements OnInit {
  @Input() public regles!: Regle[];
  @Input() selectedRegle!: Regle;

  @Output() private changeRegle: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public selectRegle(index: number): void {
    this.changeRegle.emit(index);

}
}





