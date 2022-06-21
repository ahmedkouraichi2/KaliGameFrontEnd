import { Component, ViewChild, TemplateRef, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import {  PageModalSettingUpdateComponent} from "./page-modal-setting-update.component";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  template: `
    <ng-template>
      <router-outlet></router-outlet>
    </ng-template>
  `
})
export class PageModalSettingUpdateWapperComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) templateRef: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.openDialog();
  }

  private openDialog() {
    const dialog = this.dialog.open(PageModalSettingUpdateComponent);
    dialog.componentInstance.contentTemplate = this.templateRef;

    dialog.afterClosed().subscribe(result => {
      this.router.navigate(["../"], {
        relativeTo: this.route
      });
    });
  }
}
