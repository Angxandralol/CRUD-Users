import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { UserModel } from '../../model/user.model';
import { DatabaseService } from '../../services/database.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  public selectedUser: UserModel;
  public email!: any;
  public userArray: UserModel[];
  public dataUsuario: UserModel;
  
  constructor(private servidor:DatabaseService, private route:ActivatedRoute, private ruta:Router) {
    this.selectedUser = new UserModel();
    this.userArray = []; 
    this.dataUsuario = new UserModel();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params=> {
      this.email = params.get('email');
    });
  }

  //Obtener Usuario
  public getUser(form:NgForm){
    this.servidor.getUser(this.email).subscribe(data=>{
      let res: any = data;
      let json: UserModel = res[0] as UserModel;
      this.dataUsuario.name = json.name;
      this.dataUsuario.password = json.password;
      this.updateUser(form);
    });
  }

  //Actualizar Usuario
  public updateUser(form:NgForm){
    this.servidor.putUpdateUser(this.email, this.generadorUser(form)).subscribe( data=>{
      alert(`Users email:${this.email} has been updated`);
      this.ruta.navigate(['/'])
    });
  }

  public generadorUser(form:NgForm){
    let user = new UserModel();
    if (form.value.name) {
      user.name = form.value.name;
    }
    else {
      user.name = this.dataUsuario.name;
    }
    if (form.value.password) {
      user.password = form.value.password;
    }
    else {
      user.password = this.dataUsuario.password;
    }
    user.email = this.email;
    return user;
  }

}
