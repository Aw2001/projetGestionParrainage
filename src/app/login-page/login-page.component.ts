import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // La méthode ngOnInit() ne devrait pas contenir de fonctions de navigation, elle est utilisée pour initialiser le composant.
  }
}
