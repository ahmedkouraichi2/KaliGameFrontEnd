import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EStore} from "@fireflysemantics/slice";
import {Observable} from "rxjs";
import {untilDestroyed} from "ngx-take-until-destroy";
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PageModalSettingComponent} from "../../pages/page-modal-setting/page-modal-setting.component";

const enum TodoSliceEnum {
  COMPLETE = "Complete",
  INCOMPLETE = "Incomplete"
}

class Todo {
  connecteur: string="";
  type: string="";
  dateCreation:string="";

}

const todos: Todo[] = [
  { connecteur: "connecteur n°1", type: "Fs",dateCreation:"02-03-2022"}
];
const todos2: Todo[] = [
  { connecteur: "connecteur n°2", type: "Web",dateCreation:"03-03-2022"}
];
const todos4: Todo[] = [
  { connecteur: "connecteur n°2", type: "DB",dateCreation:"03-03-2022"}
];
const todos5: Todo[] = [
  { connecteur: "connecteur n°2", type: "Web",dateCreation:"03-03-2022"}
];
const todos6: Todo[] = [
  { connecteur: "connecteur n°2", type: "BD",dateCreation:"03-03-2022"}
];
@Component({
  selector: 'app-table-setting',
  templateUrl: './table-setting.component.html',
  styleUrls: ['./table-setting.component.scss']
})
export class TableSettingComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private router: Router) {
  }

  displayedColumns: string[] = ["connecteur", "type", "dateCreation", "actions"];
  dataSource: MatTableDataSource<Todo>;
  todoStore: EStore<Todo> = new EStore<Todo>();
  todos$: Observable<Todo[]>;

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    const self = this;
    this.dataSource = new MatTableDataSource(todos);
    this.todoStore.postA(todos);
    this.todos$ = this.todoStore.observe();
    this.todos$.pipe(untilDestroyed(this)).subscribe(todos => {
      console.log("Setting data to:", todos);
      self.dataSource.data = todos;
    });
    setTimeout(() => {
      self.todoStore.postA(todos2);
    }, 200);
    this.todos$.pipe(untilDestroyed(this)).subscribe(todos => {
      console.log("Setting data to:", todos);
      self.dataSource.data = todos;
    });
    setTimeout(() => {
      self.todoStore.postA(todos4);
    }, 200);
    this.todos$.pipe(untilDestroyed(this)).subscribe(todos => {
      console.log("Setting data to:", todos);
      self.dataSource.data = todos;
    });
    setTimeout(() => {
      self.todoStore.postA(todos5);
    }, 200);
    this.todos$.pipe(untilDestroyed(this)).subscribe(todos => {
      console.log("Setting data to:", todos);
      self.dataSource.data = todos;
    });
    setTimeout(() => {
      self.todoStore.postA(todos6);
    }, 200);
  }

  getRecord(row: any) {
    console.log(row);
  }

  OpenDialogSetting() {
    const dialogRef = this.dialog.open(PageModalSettingComponent, {
      width: '760px'
      , data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(
      result => {
        console.log('The dialog was closed');
        this.animal = result;
      }
    );
  }
}
