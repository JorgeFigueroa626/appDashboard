import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endpoint } from '../shared/apis/endpoint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private _http: HttpClient) {}

  // ESTRUCTURAR LOS SERVICIO
  public findAllCategorias() {
    const requestUrl = `${environment.api}${endpoint.LIST_CATEGORIAS}`;
    return this._http.get(requestUrl);
  }

  public saveCategoria(categoria: any): Observable<any> {
    const requestUrl = `${environment.api}${endpoint.CATEGORIA_REGISTER}`;
    return this._http.post(requestUrl, categoria);
  }
}
