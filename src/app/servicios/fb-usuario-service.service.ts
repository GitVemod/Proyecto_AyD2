import { Injectable } from '@angular/core';

import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Usuario } from '../modelos/usuario';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FbUsuarioServiceService {

  //para obtener la coleccion que se desea
  colUsuarios : AngularFirestoreCollection<Usuario>;
  //para obtener los documentos que corresponden a la colleccion
  docUsuario: AngularFirestoreDocument<Usuario>;
  //cada uno de los datos encontrados dentro del documento
  usuarios: Observable<Usuario[]>;
  usuario:Usuario;
  usuarioIniciado : Usuario;

  
  constructor(public afs:AngularFirestore) {
    this.colUsuarios = this.afs.collection('usuarios');
    //se mantiene escuchando para obtener los nuevos cambios en la base da datos
    this.usuarios = this.colUsuarios.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getUsuarios() {
    return this.usuarios; 
  }

  addUsuario(usuario: Usuario) {
    this.colUsuarios.add(usuario);
  }

  deleteUsuario(usuario: Usuario) {
    this.docUsuario = this.afs.doc(`usuarios/${usuario.id}`);
    this.docUsuario.delete();
  }

  updateUsuario(usuario: Usuario) {
    this.docUsuario = this.afs.doc(`usuarios/${usuario.id}`);
    this.docUsuario.update(usuario);
  }

  login(usuario: Usuario){
    this.docUsuario = this.afs.doc(`usuarios/${usuario.id}`);
    //if(this.docUsuario.)
  }

  getUsuario(id:string){
    var encontrado:boolean = false;
    this.usuarios.forEach(element =>{
      element.forEach(user =>{
        if(user.id == id && !encontrado){
          this.usuario = user;
          encontrado = true;
        }
      });
    });
    return this.usuario;
  }
}
