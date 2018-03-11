import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombreApp : string;
  correo : string;
  integrantes : string[];
  registrarse : string;

  constructor(){
    this.nombreApp = 'Alcancia';
    this.correo = 'grupo1@correo.com';
    this.integrantes = ['Adrian', 'Jenny', 'Gilberto', 'Diego', 'Jorge'];
    this.registrarse = "registrarse.html";
  }
}
