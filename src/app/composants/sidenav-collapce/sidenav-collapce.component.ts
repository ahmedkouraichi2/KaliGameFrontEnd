import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navbardata} from "./nav-data";
import {animate, animation, keyframes, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../services/auth.service";

import {TokenStorageService} from "../../services/token-storage.service";
import {ERole} from "../../services/model/ERole";
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean
}
@Component({
  selector: 'app-sidenav-collapce',
  templateUrl: './sidenav-collapce.component.html',
  styleUrls: ['./sidenav-collapce.component.scss'],
  animations:[
    trigger('fadeIn',[
      transition(':enter',
        [style({opacity:0}),
              animate( '350ms',
              style({opacity:1}))
      ]),
      transition(':leave',
        [style({opacity:1}),
          animate( '350ms',
            style({opacity:0 }))
        ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform:'rotate(0deg)',offset:'0'}),
            style({transform:'rotate(2turn)',offset:'1'})
          ]))
      ])
    ]
    )]
})
export class SidenavCollapceComponent implements OnInit {
  currentUser: any;
  @Output()
  onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();
  screenWidth=0;
  collapsed=true;
  navData=navbardata
  @HostListener('window.resize',['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if (this.screenWidth<=768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})

    }
  }
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.role);
  }
  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
  closeSidenav():void{
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})

  }
   isAdmin() {

     return  this.currentUser.role == ERole.ROLE_ADMIN;
  }

}
