import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public user: UserModel; //Para la creacion de formulario
  public usuarios!:UserModel[]; //Para Ver y Borrar
  
  constructor(private servidor:DatabaseService) {
    this.user = new UserModel; 
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  //CRUD
  //Nuevo Usuario
  public addUser(form:NgForm){
    this.servidor.postAddUser(this.newUser(form)).subscribe(data=>{
      alert('Usuario añadido con éxito');
      form.reset();
      this.ngOnInit();
    });
  }
  public newUser(form: NgForm){
    let user: UserModel = new UserModel();
    user.name = form.value.name;
    user.email = form.value.email;
    user.password = form.value.password;
    return user;
  }
  //Ver Usuarios
  public getAllUser(){
    this.servidor.getAllUser().subscribe(data=>{
      this.usuarios = data as UserModel[];
    })
  }

  //Borrar Usuario
  public deleteUser(user:UserModel) {
    let form = confirm('Do you want to delete this user?')
    if (form==true) {
      let email = user.email;
      this.servidor.deleteUser(email).subscribe( data=>{
        this.ngOnInit();
      })
    }
  }

}
