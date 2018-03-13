import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cuenta } from '../../modelos/cuenta';
import { CuentaServiceService } from '../../servicios/cuenta-service.service';


@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css']
})
export class AddCountComponent implements OnInit {

  cuenta: Cuenta = { id: '', descripcion: '', saldo:0, noCuenta:0, idUser: ''};
  cuentas:Cuenta[];
  idUser : string;
  constructor(private route:ActivatedRoute,public cuentaservice : CuentaServiceService) {

  }
  
  ngOnInit() {
    this.cuentaservice.getCuentas().subscribe( cuentas => {
      this.cuentas = cuentas;
    });

    this.route.paramMap.subscribe(parametrosURL => {
      this.idUser = parametrosURL.get('id');
    });
    
  }
  getRandomSpan(){
    return Math.floor((Math.random()*10000)+1);
  };

  registrarCuenta(){
    if(this.cuenta.noCuenta != 0 ){
      this.cuenta.saldo = this.getRandomSpan();
      this.cuenta.idUser = this.idUser ;
      this.cuenta.descripcion = 'g&t';
      this.cuentaservice.addCuenta(this.cuenta);
      alert("Cuenta " + this.cuenta.noCuenta + " ha sido agregada con exito");
      this.cuenta.id = '';
      this.cuenta.descripcion = '';
      this.cuenta.idUser = '';
      this.cuenta.saldo = 0;
      this.cuenta.noCuenta = 0;
    }
  }



  verCuentas(){
    console.log(this.cuentas);
  }




}
