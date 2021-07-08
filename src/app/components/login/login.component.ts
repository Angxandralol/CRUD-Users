import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: UserModel;

  constructor() {
    this.login = new UserModel();
  }

  ngOnInit(): void {
  }



}
