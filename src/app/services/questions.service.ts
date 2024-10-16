import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endpoint } from '../shared/apis/endpoint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _http: HttpClient) { }

  findAllQuestionsByExamenId(examenId: number){
    const requestUrl = `${environment.api}${endpoint.LIST_PREGUNTAS}${examenId}`;
    return this._http.get(requestUrl);
  }


  findAllsQuestionsExamenIdAdmin(examenId: number){
    const requestUrl = `${environment.api}${endpoint.LIST_PREGUNTAS}todos/${examenId}`;
    return this._http.get(requestUrl);
  }

  createQuestionsByExamenId(pregunta:any):Observable<any>{
    const requestUrl = `${environment.api}${endpoint.PREGUNTA_REGISTER}`;
    return this._http.post(requestUrl, pregunta);
  }

  deleteQuestions(preguntaId:number){
    const requestUrl = `${environment.api}${endpoint.PREGUNTA_REMOVER}${preguntaId}`;
    return this._http.delete(requestUrl);
  }

  updateQuestion(pregunta:any){
    const requestUrl = `${environment.api}${endpoint.PREGUNTA_EDIT}`;
    return this._http.put(requestUrl, pregunta);
  }

  getQuestionId(preguntaId:any){
    const requestUrl = `${environment.api}${endpoint.PREGUNTA_BY_ID}${preguntaId}`;
    return this._http.get(requestUrl);
  }

  findAllQuestionsByExamIdStart(examId:number){
    const requestUrl = `${environment.api}${endpoint.LIST_PREGUNTAS}todos/${examId}`;
    return this._http.get(requestUrl);
  }

  evaluarQuestion(question:any){
    const requestUrl = `${environment.api}${endpoint.EVALUAR_PREGUNTA}`;
    return this._http.post(requestUrl, question);
  }

}
