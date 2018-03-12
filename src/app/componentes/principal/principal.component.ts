import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbUsuarioServiceService } from '../../servicios/fb-usuario-service.service';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarioIniciado : Usuario;
  usuarios:Usuario[];
  id : string;
  constructor(private route:ActivatedRoute, public usuarioService:FbUsuarioServiceService) {
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe( usuarios => {
      this.usuarios = usuarios;
    });

    this.route.paramMap.subscribe(parametrosURL => {
      this.id = parametrosURL.get('id');
      if(this.usuarios){
        console.log("hay usuarios");
      }
      // var encontrado:boolean = false;
      // this.usuarios.forEach(element => {
      //   if(element.id == parametrosURL.get('id') ){
      //     this.usuarioIniciado = element;
      //     encontrado = true;
      //   }
      // });
    })
    
  }

}
