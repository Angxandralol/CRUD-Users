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
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    InicioModule, 
    ReactiveFormsModule
  ],
  providers: [DatabaseService, CookieService],
  bootstrap: [AppComponent], 
})
export class AppModule { }
