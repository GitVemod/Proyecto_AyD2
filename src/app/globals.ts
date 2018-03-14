import { Injectable } from '@angular/core';
import { Usuario } from '../app/modelos/usuario';

export class globals {
  private usuario: Usuario ;
    get getUsuarioIniciado():Usuario {
        return this.usuario;
    }
    set setUsuarioIniciado(user:Usuario) {
        this.usuario = user;
    }
}