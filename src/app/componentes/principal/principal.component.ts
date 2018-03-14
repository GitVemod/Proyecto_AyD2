import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbUsuarioServiceService } from '../../servicios/fb-usuario-service.service';
import { Usuario } from '../../modelos/usuario';
import { CuentaServiceService } from '../../servicios/cuenta-service.service';
import { Cuenta } from '../../modelos/cuenta';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  showForm1: boolean;
  showForm2: boolean;
  showForm3: boolean;

  usuarios:Usuario[];
  id : string;
  name : string;
  constructor(private route:ActivatedRoute, public usuarioService:FbUsuarioServiceService,
    public cuentaservice : CuentaServiceService ) {
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe( usuarios => {
      this.usuarios = usuarios;
    });

    this.cuentaservice.getCuentas().subscribe( cuentas => {
     this.cuentaservice.cuentasArregloGlobal = cuentas;
    });

    this.route.paramMap.subscribe(parametrosURL => {
      this.id = parametrosURL.get('id');
    });
    
    
    /*  PRUEBA solo para no estar iniciado secion a cada rato */
    this.usuarioService.usuarioIniciado = {
      "apellidos": "Rosales",
      "clave": "123",
      "correo": "rosalesgilberto999@gmail.com",
      "cui": "2712456700101",
      "id": "ETT5xOTC214DblTQuzlX",
      "nombres": "Gilberto"
    }
    /************************************************************/
    console.log(this.usuarioService.usuarioIniciado);
    this.name = this.usuarioService.usuarioIniciado.nombres;
  }
  getRandomSpan(){
    return Math.floor((Math.random()*10000)+1);
  };




  show1(){
    this.showForm2 = false;
    this.showForm3 = false;
    if(this.showForm1){
      this.showForm1 = false;
    }else{
      this.showForm1 = true;
    }
    
  }

  show2(){

    this.showForm1 = false;
    this.showForm3 = false;
    if(this.showForm2){
      this.showForm2 = false;
    }else{
      this.showForm2 = true;
    }
    
  }

  show3(){

    this.showForm2 = false;
    this.showForm1 = false;
    if(this.showForm3){
      this.showForm3 = false;
    }else{
      this.showForm3 = true;
    }
    
  }
  
}
