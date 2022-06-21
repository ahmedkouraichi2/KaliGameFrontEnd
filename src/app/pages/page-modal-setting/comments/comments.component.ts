import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Output()commentaire=new EventEmitter<string>();
  message:string;
  constructor() { }

  ngOnInit(): void {
  }

  SetMessage($event: any) {
    this.commentaire.emit(this.message)
    console.log(this.message)

  }
}
