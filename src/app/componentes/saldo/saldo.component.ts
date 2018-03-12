import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { ActivatedRoute } from '@angular/router';
import { FbUsuarioServiceService } from '../../servicios/fb-usuario-service.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  id:string;
  usuarios:Usuario[];
  constructor(private route:ActivatedRoute, public usuarioService:FbUsuarioServiceService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe( usuarios => {
      this.usuarios = usuarios;
    });

    this.route.paramMap.subscribe(parametrosURL => {
      this.id = parametrosURL.get('id') + " DESDE SALDO";
      if(this.usuarios){
        console.log("hay usuarios");
      }
    });
  }
}
