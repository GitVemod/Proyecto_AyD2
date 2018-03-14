import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbUsuarioServiceService } from '../../servicios/fb-usuario-service.service';
import { Usuario } from '../../modelos/usuario';
import { CuentaServiceService } from '../../servicios/cuenta-service.service';
import { Cuenta } from '../../modelos/cuenta';


@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  id:string;
  cuentasUser: Cuenta[] = [];
  textCuenta:number  = 0 ;
  textDinero:number  = 0 ;
  textCuentaTercero:number = 0;
  textSaldo:number = 0;
  usuarios:Usuario[];
  cuenta1: Cuenta = { id: '', descripcion: '', saldo:0, noCuenta:0, idUser: ''};
  cuenta2:Cuenta;
  showForm12:boolean =false;
  
  cuentasArreglo:Cuenta[];
  constructor(private route:ActivatedRoute, public usuarioService:FbUsuarioServiceService,
    public cuentasCorriendo:CuentaServiceService) { }

  ngOnInit() {
    this.cuentasCorriendo.cuentasArregloGlobal.forEach(element =>{
        if(element.idUser == this.usuarioService.usuarioIniciado.id){
          this.cuentasUser.push(element);
        }
    });
  }

  realizarTrasfer(){
    if(this.textCuenta!=0){
      if(this.comprobarCuentaTercero(this.textCuentaTercero)){
        this.traerCuenta1(this.textCuenta);
        if(this.cuenta1.saldo>=this.textDinero){
          this.textSaldo = this.cuenta1.saldo - this.textDinero;
          this.showForm12 = true;
        }else{
          alert('No tiene fondos suficientes');
        }
   
      }else{
        alert('Cuenta a tercero no se encuentra en el sistema');
      }
    }else{
      alert('Seleccione una cuenta');
    }
    

  
  }
 
  comprobarCuentaTercero(noCuenta: number):boolean{
    var encontrado:boolean = false;
    this.cuentasCorriendo.cuentasArregloGlobal.forEach(element =>{
      if(element.noCuenta == noCuenta){
        this.cuenta2 = element;
        encontrado =true;
      }
  });
    return encontrado
  }
  
  traerCuenta1(noCuenta: number){
    this.cuentasCorriendo.cuentasArregloGlobal.forEach(element =>{
      if(element.noCuenta == noCuenta){
        this.cuenta1 = element;
      }
  });
  }


  cancelTrasfer(){
    this.showForm12 = false;
  }

  confirmTrasfer(){
    var numero1:string = '';
    var numero2:string = '';
    numero1 = this.textDinero + '';
    numero2 = this.cuenta2.saldo  + '';
    this.cuenta1.saldo =this.cuenta1.saldo -this.textDinero;
    var numero:number = 0;
    numero = this.getSuma(parseInt(numero2),parseInt(numero1));
    console.log (numero);
    this.cuenta2.saldo = numero;
    this.cuentasCorriendo.updateCuenta(this.cuenta2);
    this.cuentasCorriendo.updateCuenta(this.cuenta1);

    alert('Transferencia realizada con éxito');
    this.showForm12 = false;
  }



  getSuma(val1:number ,val2:number ):number{
    var val3:number = 0;
    val3 = val1+val2;
    return val3
  }


}



