import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { FbUsuarioServiceService } from '../../servicios/fb-usuario-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: Usuario = { nombres: '', apellidos:'', correo: '', cui: '', clave: ''};
  usuarios:Usuario[];
  constructor(public usuarioService : FbUsuarioServiceService, private router: Router) {

  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe( usuarios => {
      this.usuarios = usuarios;
    })

  }

  iniciarSesion(){
    
    if(this.usuario.correo != '' &&  this.usuario.clave != ''){
      //var clave = hashSync(this.usuario.clave, genSaltSync(5));
      //console.log(this.usuario.clave + 'Convertica con bcrypt = ' + clave);
      var usuarioInicio:Usuario;
      var encontrado:boolean = false;
      this.usuarios.forEach(element => {
        if(element.correo == this.usuario.correo && element.clave == this.usuario.clave && !encontrado){
          usuarioInicio = element;
          this.usuarioService.usuarioIniciado = element;
          encontrado = true;
        }
      });
      if(encontrado){
        this.router.navigate(["/principal" , usuarioInicio.id]);
      } else alert("Credenciales invalidas");
    }
  }

}
