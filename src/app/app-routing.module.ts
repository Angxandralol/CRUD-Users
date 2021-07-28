import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  {path:'', component:InicioComponent}, 
  {path:'users/:email', component:EditComponent}, 
  {path:'login', component:LoginComponent},
  {
    path:'home/:email',
    component:HomeComponent, 
    canActivate: [VigilanteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
