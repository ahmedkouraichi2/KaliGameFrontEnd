
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ViewChild} from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @ViewChild('menuTrigger') trigger: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.trigger.closeMenu()
    }, 3000)
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
