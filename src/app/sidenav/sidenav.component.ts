import { Component, OnInit } from '@angular/core';
import {ChoisirMenuService} from '../choisir-menu.service'
let b:number=0;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public choisirMenu:ChoisirMenuService) { }

  ngOnInit(): void {
    this.choisirMenu.setVar(b);
  }

}
