import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrudFirebaseComponent } from './crud-firebase/crud-firebase.component';

//Importamos las clases para trabajar con firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//importamos la configuracion de firebase
import { environment } from '../environments/environment';
import { ShowComponent } from './components/show/show.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { CrudLocalStorageComponent } from './crud-local-storage/crud-local-storage.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    CrudFirebaseComponent,
    ShowComponent,
    CreateComponent,
    EditComponent,
    CrudLocalStorageComponent,

  ],
  imports: [BrowserModule, AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
