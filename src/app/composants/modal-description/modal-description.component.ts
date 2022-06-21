import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Processor} from "../table-modal-processor/table-modal-processor.component";


@Component({
  selector: 'app-modal-description',
  templateUrl: './modal-description.component.html',
  styleUrls: ['./modal-description.component.scss']
})
export class ModalDescriptionComponent implements OnInit {
  @Input() processor : Processor;
  @Input() highestIndex: number;
  @Output() changeQuestion : EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
