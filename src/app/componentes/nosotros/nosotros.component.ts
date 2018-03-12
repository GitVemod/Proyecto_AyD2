import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  integrantes : string[];
  constructor() {
    this.integrantes = ['Adrian', 'Jenny', 'Gilberto', 'Diego', 'Jorge'];
  }

  ngOnInit() {
  }

}
