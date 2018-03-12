import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbUsuarioServiceService } from '../../servicios/fb-usuario-service.service';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  id:string;
  usuarios:Usuario[];
  constructor(private route:ActivatedRoute, public usuarioService:FbUsuarioServiceService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe( usuarios => {
      this.usuarios = usuarios;
    });

    this.route.paramMap.subscribe(parametrosURL => {
      this.id = parametrosURL.get('id') + " DESDE TRANSFERENCIA";
      if(this.usuarios){
        console.log("hay usuarios");
      }
    });
  }

}
