import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/model/user.model'; 
import { DatabaseService } from '../../services/database.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: UserModel;
  public email!: string;

  constructor(private servidor:DatabaseService, private cookieService: CookieService, private ruta:Router) {
    this.login = new UserModel();
  }

  ngOnInit(): void {
  }

  userLogin(form:NgForm){
    this.servidor.login(this.userInicio(form)).subscribe(data=>{
      let res: any;
      res = data;
      let accesstoken: any;
      accesstoken = res['token'];
      alert("Login exitoso");
      this.cookieService.set('token', accesstoken, 4, '/');
      this.ruta.navigate(['/home/', this.email]);
    })
  }
  userInicio(form:NgForm) {
    let user: UserModel = new UserModel();
    user.email = form.value.email;
    user.password = form.value.password;
    this.email = user.email;
    return user;
  }

}
