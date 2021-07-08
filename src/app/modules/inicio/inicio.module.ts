import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Routing
import { AppRoutingModule } from '../../app-routing.module';
//Componente
import { InicioComponent } from '../../components/inicio/inicio.component';
import { EditComponent } from '../../components/edit/edit.component';

//const components = [InicioComponent,EditComponent];

@NgModule({
  declarations: [
    InicioComponent, 
    EditComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    AppRoutingModule
  ], 
  exports: [InicioComponent, EditComponent]
})
export class InicioModule { }
