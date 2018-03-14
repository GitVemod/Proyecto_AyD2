import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { ActivatedRoute } from '@angular/router';
import { FbUsuarioServiceService } from '../../servicios/fb-usuario-service.service';
import { CuentaServiceService } from '../../servicios/cuenta-service.service';
import { Cuenta } from '../../modelos/cuenta';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {
  cuentasUser: Cuenta[] = [];
  id:string;
  usuarios:Usuario[];
  textCuenta:number  = 0 ;
  cuenta1: Cuenta = { id: '', descripcion: '', saldo:0, noCuenta:0, idUser: ''};
  constructor(private route:ActivatedRoute, public usuarioService:FbUsuarioServiceService,
    public cuentasCorriendo:CuentaServiceService) { }

  ngOnInit() {
    this.cuentasCorriendo.cuentasArregloGlobal.forEach(element =>{
      if(element.idUser == this.usuarioService.usuarioIniciado.id){
        this.cuentasUser.push(element);
      }
  });
}

ver(){
  if(this.textCuenta!=0){
    this.traerCuenta1(this.textCuenta);
  }  else{
    alert('Seleccione una cuenta');
  }
}

traerCuenta1(noCuenta: number){
  this.cuentasCorriendo.cuentasArregloGlobal.forEach(element =>{
    if(element.noCuenta == noCuenta){
      this.cuenta1 = element;
    }
});
}

}
