import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';

import { RouterModule, Routes} from '@angular/router';

import { FbUsuarioServiceService } from './servicios/fb-usuario-service.service';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarseComponent,
    PrincipalComponent,
    NavbarComponent,
    NosotrosComponent,
    InicioComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: InicioComponent },
      { path: 'principal/:id', component: PrincipalComponent },
      { path: 'registrarse', component: RegistrarseComponent },
      { path: 'nosotros', component: NosotrosComponent }
    ]),
    FormsModule,
    BrowserModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase, 'ayd2'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [ FbUsuarioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
