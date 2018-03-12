import { Component, OnInit } from '@angular/core';

import { Usuario }  from './modelos/usuario';
import { FbUsuarioServiceService } from './servicios/fb-usuario-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  URLregistrarse : string;

  //usuarios en firebase
  usuarios : Usuario[];

  constructor(public registrarService : FbUsuarioServiceService){
    
  }

  ngOnInit(){
    this.registrarService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }

  agregarIntegrante(correo, clave){
    // var integrante = { "nombre": correo, "clave": clave}
    // this.db.database.ref('integrantes/' + Date.now()).set(integrante);
  }

  
}
