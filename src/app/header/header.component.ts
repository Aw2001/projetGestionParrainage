import { Component, OnInit } from '@angular/core';
import {  faSignOutAlt, faEye, faUserEdit  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpened: boolean = false;
  faSignOutAlt = faSignOutAlt;
  faEye = faEye;
  faUserEdit = faUserEdit;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

}
