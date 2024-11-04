import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JefeComponent } from './jefe/jefe.component';
import { ListarSalasComponent } from './listar-salas/listar-salas.component';
import { CrearSalaComponent } from './crear-sala/crear-sala.component';

import {SalaService} from './sala.service';
import { GestionarSalaComponent } from './gestionar-sala/gestionar-sala.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    JefeComponent,
    ListarSalasComponent,
    CrearSalaComponent,
    GestionarSalaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SalaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
