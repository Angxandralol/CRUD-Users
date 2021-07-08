import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { EditComponent } from './components/edit/edit.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'', component:InicioComponent}, 
  {path:'users/:email', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
