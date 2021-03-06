//Formularios 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { InicioModule } from './modules/inicio/inicio.module';
//Componentes
import { AppComponent } from './app.component';
//Servicios
import { HttpClientModule } from '@angular/common/http'
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    InicioModule, 
    ReactiveFormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent], 
})
export class AppModule { }
