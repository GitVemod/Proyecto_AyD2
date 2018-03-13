import { Injectable } from '@angular/core';


import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Cuenta } from '../modelos/cuenta';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class CuentaServiceService {
//para obtener la coleccion que se desea
colCuentas : AngularFirestoreCollection<Cuenta>;
//para obtener los documentos que corresponden a la colleccion
docCuenta: AngularFirestoreDocument<Cuenta>;
//cada uno de los datos encontrados dentro del documento
Cuentas: Observable<Cuenta[]>;
Cuenta:Cuenta;
CuentaIniciado : Cuenta;


constructor(public afs:AngularFirestore) {
  this.colCuentas = this.afs.collection('cuentas');
  //se mantiene escuchando para obtener los nuevos cambios en la base da datos
  this.Cuentas = this.colCuentas.snapshotChanges().map(changes => {
    return changes.map(a => {
      const data = a.payload.doc.data() as Cuenta;
      data.id = a.payload.doc.id;
      return data;
    });
  });
}

getCuentas() {
  return this.Cuentas; 
}

addCuenta(Cuenta: Cuenta) {
  this.colCuentas.add(Cuenta);
}

deleteCuenta(Cuenta: Cuenta) {
  this.docCuenta = this.afs.doc(`cuentas/${Cuenta.id}`);
  this.docCuenta.delete();
}

updateCuenta(Cuenta: Cuenta) {
  this.docCuenta = this.afs.doc(`cuentas/${Cuenta.id}`);
  this.docCuenta.update(Cuenta);
}

login(Cuenta: Cuenta){
  this.docCuenta = this.afs.doc(`cuentas/${Cuenta.id}`);
  //if(this.docCuenta.)
}

getCuenta(id:string){
  var encontrado:boolean = false;
  this.Cuentas.forEach(element =>{
    element.forEach(user =>{
      if(user.id == id && !encontrado){
        this.Cuenta = user;
        encontrado = true;
      }
    });
  });
  return this.Cuenta;
}

}
