import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endpoint } from '../shared/apis/endpoint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  constructor(private _http: HttpClient) { }

  public finAllExamenes(){
    const requestUrl = `${environment.api}${endpoint.LIST_EXAMENES}`;
    return this._http.get(requestUrl);
  }

  public saveExamen(data:any):Observable<any>{
    const requestUrl = `${environment.api}${endpoint.EXAMEN_REGISTER}`;
    return this._http.post(requestUrl, data);
  }

  public getByExamenId(exmaneId: number){
    const requestUrl = `${environment.api}${endpoint.EXAMANE_BY_ID}${exmaneId}`;
    return this._http.get(requestUrl);
  }
  
  public deleteExamen(id: number){
    const requestUrl = `${environment.api}${endpoint.EXAMEN_REMOVER}${id}`;
    return this._http.delete(requestUrl);
  }

  public updateExamen(examen:any){
    const requestUrl = `${environment.api}${endpoint.EXAMEN_EDIT}`;
    return this._http.put(requestUrl, examen);
  }

  public fidAllCategoryByCategoriaId(categoryId: number){
    const requestUrl = `${environment.api}${endpoint.LIST_EXAMENES_BY_CATEGORIA_ID}${categoryId}`;
    return this._http.get(requestUrl);
  }

  public getExamenActivo(){
    const requestUrl = `${environment.api}${endpoint.LIST_EXAMENES_STATE}`;
    return this._http.get(requestUrl);
  }

  public getAllExamenActivoByCategoriaId(categoriaId:number){
    const requestUrl = `${environment.api}${endpoint.LIST_EXAMENES_STATE_BY_CATEGORIA_ID}${categoriaId}`;
    return this._http.get(requestUrl);
  }


}
