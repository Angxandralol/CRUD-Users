import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  //@Input() user!:UserModel; //Para Actualizar
  //public user!: UserModel;
  public selectedUser: UserModel;
  public email!: any;

  constructor(private servidor:DatabaseService, private route:ActivatedRoute) {
    this.selectedUser = new UserModel();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.email = params.get('email');
    })
  }

  //Actualizar Usuario
  public updateUser(form:NgForm){
    this.servidor.putUpdateUser(this.email, this.generadorUser(form)).subscribe( data=>{
      alert(`Users email:${this.email} has been updated`);
    });
    this.ngOnInit();
  }
  public generadorUser(form:NgForm){
    let user = new UserModel();
    user.name = form.value.name;
    user.email = this.email;
    user.password = form.value.password;
    return user;
  }

}
