import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-page-log-out',
  templateUrl: './page-log-out.component.html',
  styleUrls: ['./page-log-out.component.scss']
})
export class PageLogOutComponent implements OnInit {

  constructor(private router: Router,private authenticationService: AuthService) { }

  ngOnInit(): void {
    this.logout();
  }
  logout() {

    this.authenticationService.signOut();
    this.router.navigate(['accounts/login']);
  }

}
