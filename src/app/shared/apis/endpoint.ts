import { HttpHeaders } from "@angular/common/http";

export const endpoint = {

    //USUARIO
    LOGIN_TOKEN: '/api/generate-token',
    LOGIN_USUARIO: '/api/actual-usuario',
    LIST_USUARIOS: '/api/usuarios/',
    USUARIO_BY_ID: '/api/usuarios/',
    USUARIO_REGISTER: '/api/usuarios/',
    USUARIO_EDIT: '/api/usuarios/',
    USUARIO_REMOVER: '/api/usuarios/',

    //CATEGORIA
    LIST_CATEGORIAS: '/api/categorias',
    CATEGORIA_BY_ID: '/api/categorias/',
    CATEGORIA_REGISTER: '/api/categorias',
    CATEGORIA_EDIT: '/api/categorias/',
    CATEGORIA_REMOVER: '/api/categorias/',

    //EXAMEN
    LIST_EXAMENES: '/api/examenes',
    EXAMANE_BY_ID: '/api/examenes/',
    EXAMEN_REGISTER: '/api/examenes',
    EXAMEN_EDIT: '/api/examenes',
    EXAMEN_REMOVER: '/api/examenes/',
    LIST_EXAMENES_BY_CATEGORIA_ID: '/api/examenes/categoria/',
    LIST_EXAMENES_STATE: '/api/examenes/state',
    LIST_EXAMENES_STATE_BY_CATEGORIA_ID: '/api/examenes/categoria/state/',

    //PREGUNTA
    LIST_PREGUNTAS: '/api/preguntas/examen/',
    PREGUNTA_BY_ID: '/api/preguntas/',
    PREGUNTA_REGISTER: '/api/preguntas',
    PREGUNTA_EDIT: '/api/preguntas',
    EVALUAR_PREGUNTA: '/api/preguntas/evaluar-examen',
    PREGUNTA_REMOVER: '/api/preguntas/',
  };
  
  export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }