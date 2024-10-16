import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css'],
})
export class StartExamComponent implements OnInit {
  examId: any;
  questions: any;
  puntosConseguidos = 0;
  respuestaCorrectas = 0;
  intentos = 0;

  isSending = false;
  tiempo: any;

  constructor(
    private _locationStart: LocationStrategy,
    private _questionService: QuestionsService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.disableTheBackButton();
    this.examId = this._route.snapshot.params['examId'];
    this.loadQuestions();
  }

  loadQuestions() {
    this._questionService.findAllQuestionsByExamIdStart(this.examId).subscribe(
      (data) => {
        this.questions = data;
        this.tiempo = this.questions.length * 2 * 60;
        this.questions.forEach((resp: any) => {
          resp['respuestaDada'] = '';
        });
        console.log(this.questions);
        this.startTiempo();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  startTiempo() {
    let tiemp = window.setInterval(() => {
      if (this.tiempo <= 0) {
        this.evaluarExamen();
        clearInterval(tiemp);
      } else {
        this.tiempo--;
      }
    }, 1000);
  }

  disableTheBackButton() {
    history.pushState(null, null!, location.href);
    this._locationStart.onPopState(() => {
      history.pushState(null, null!, location.href);
    });
  }

  sendQuestion() {
    Swal.fire({
      title: 'Confirmar enviar el examen?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.evaluarExamen();
      }
    });
  }

  evaluarExamen() {

    //CREACION DEL BACKEND
    this._questionService.evaluarQuestion(this.questions).subscribe(
      (data:any) => {
        this.puntosConseguidos = data.puntosMaximos;
        this.respuestaCorrectas = data.respuestasCorrectas
        this.intentos = data.intentos;
        this.isSending = true;
      },
      (error) => {
        console.log(error);
      }
    )


    // //CREACION DEL FONTEND
    // this.isSending = true;
    // this.questions.forEach((quest: any) => {
    //   if (quest.respuestaDada == quest.respuesta) {
    //     this.respuestaCorrectas++;
    //     let puntos = this.questions[0].examen.puntosMaximo / this.questions.length;
    //     this.puntosConseguidos += puntos;
    //   }

    //   if (quest.respuestaDada.trim() != '') {
    //     this.intentos++;
    //   }
    // });
    // console.log("Respuestas correctas : " + this.respuestasCorrectas);
    // console.log("Puntos conseguidos : " + this.puntosConseguidos);
    // console.log("Intentos : " + this.intentos);
    // console.log(this.preguntas);
  }

  getFormattedTime() {
    let mm = Math.floor(this.tiempo / 60);
    let sg = this.tiempo - mm * 60;
    return `${mm} : min : ${sg} seg`;
  }

  printPage(){
    window.print()
  }
}
