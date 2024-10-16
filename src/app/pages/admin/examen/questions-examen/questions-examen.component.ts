import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questions-examen',
  templateUrl: './questions-examen.component.html',
  styleUrls: ['./questions-examen.component.css']
})
export class QuestionsExamenComponent implements OnInit{

  constructor(
    private _questionsExamen: QuestionsService,
    private _route: ActivatedRoute,
    private _router:Router,
    private _snackBar:MatSnackBar

  ){}

  examenId:any;
  titulo:any;
  questions:any = [];
  
  ngOnInit(): void {
    this.examenId = this._route.snapshot.params['examenId'];
    this.titulo = this._route.snapshot.params['titulo'];
    console.log(this.titulo, this.examenId);

    this._questionsExamen.findAllsQuestionsExamenIdAdmin(this.examenId).subscribe(
      (data) =>{
        this.questions = data;
      },
      (error) =>{
        console.log(error);
        
      }
    )
  }

  deleteQuestions(preguntaId:number){
    Swal.fire({
      title: "Confirmar?",
      text: `Esta seguro de eliminar la pregunta`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this._questionsExamen.deleteQuestions(preguntaId).subscribe(
          (data) =>{
            this.questions = this.questions.filter((question:any) => question.preguntaId != preguntaId);
            Swal.fire('Eliminado!', `Pregunta eliminado.`, 'success');
          },
          (error)=>{
            console.log(error);
            this._snackBar.open('Error!','Error al eliminar pregunta', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            })
          }
        )
      }
    });
  }

}
