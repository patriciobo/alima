import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthComponent } from './components/auth/auth.component';
import { ClientesComponent } from './components/clientes/clientes.component';

import { environment } from '../environments/environment';
import { FormClientesComponent } from './components/clientes/form-clientes/form-clientes.component';
import { AuthService } from './services/auth.service';
import { UIService } from './services/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AuthComponent,
    ClientesComponent,
    FormClientesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlexLayoutModule
  ],
  providers: [AuthService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
