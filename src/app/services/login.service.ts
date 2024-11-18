import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endpoint } from '../shared/apis/endpoint';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router:Router) { }

  //generamos el token del usuario
  public loginToke(loginData: any){
    const requestUrl = `${environment.api}${endpoint.LOGIN_TOKEN}`;
    return this._http.post(requestUrl, loginData);
  }
  
  public getCurrentUser(){
    const requestUrl = `${environment.api}${endpoint.LOGIN_USUARIO}`
    return this._http.get(requestUrl);
  }   
  
  //iniciamos sesion y establecemos el token en el localStorage
  public loginUser(token: any){
    localStorage.setItem('token', token);
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //cerrar sesion
  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this._router.navigateByUrl('')
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  //creamos el user
  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;

    }
  }

  public getUserRole(){
    let user = this.getUser();
    if (user && user.authorities && user.authorities.length > 0) {
      return user.authorities[0].authority;
    } else {
      return null;;
    }
  }


}
