import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comments-update',
  templateUrl: './comments-update.component.html',
  styleUrls: ['./comments-update.component.scss']
})
export class CommentsUpdateComponent implements OnInit {
  @Output()  message=new EventEmitter<string>();
  @Input() messageComment :string;
  constructor() { }

  ngOnInit(): void {
  }

  sendCommentMessage() {
    this.message.emit(this.messageComment);
    console.log(this.messageComment);

  }
}
