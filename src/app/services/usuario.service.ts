import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endpoint } from '../shared/apis/endpoint';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private _http: HttpClient
  ) { }

  // ESTRUCTURAR LOS SERVICIO PARA LLAMAR LOS ENPIOINT
  public registrarUsuario(usuario: any): Observable<any>{
    const requestUrl = `${environment.api}${endpoint.USUARIO_REGISTER}`;
    return this._http.post(requestUrl, usuario);
  }


}
