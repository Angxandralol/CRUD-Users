import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  
  public url: string="http://localhost:3000";

  constructor(private servidor:HttpClient) { }

  //CREATE
  public postAddUser(user:UserModel){
    return this.servidor.post(`${this.url}/add`, user);
  }
  //READ
  public getAllUser(){
    return this.servidor.get(`${this.url}/users`);
  }
  //UPDATE
  public putUpdateUser(email:string, user:UserModel){
    return this.servidor.put(`${this.url}/update/${email}`,user);
  }
  //DELETE
  public deleteUser(email:string){
    return this.servidor.delete(`${this.url}/users/${email}`);
  }
}
