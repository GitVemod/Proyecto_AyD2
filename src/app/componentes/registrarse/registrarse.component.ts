import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { FbUsuarioServiceService } from '../../servicios/fb-usuario-service.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  usuario: Usuario = { id: '', nombres: '', apellidos:'', correo: '', cui: '', clave: ''};
  usuarios:Usuario[];
  constructor(public usuarioService : FbUsuarioServiceService) {

  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe( usuarios => {
      this.usuarios = usuarios;
    })
  }

  registrarUsuario(){
    if(this.usuario.nombres != '' && this.usuario.apellidos != '' && this.usuario.correo != '' && this.usuario.cui != '' &&  this.usuario.clave != ''){
      //var clave = hashSync(this.usuario.clave, genSaltSync(5));
      //console.log(this.usuario.clave + 'Convertica con bcrypt = ' + clave);
      this.usuarioService.addUsuario(this.usuario);
      alert("Usuario " + this.usuario.nombres + " ha sido regristrado");
      this.usuario.nombres = '';
      this.usuario.apellidos = '';
      this.usuario.correo = '';
      this.usuario.cui = '';
      this.usuario.clave = '';
    }
  }

}
