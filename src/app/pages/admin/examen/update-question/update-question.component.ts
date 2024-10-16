import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit{
  
  constructor(
    private _questionsService:QuestionsService,
    private _route:ActivatedRoute,
    private _router:Router,
    private _snackBar:MatSnackBar
  ){}

  preguntaId:any = 0;
  preguntas:any;
  examen:any;

  
  ngOnInit(): void {
    this.preguntaId = this._route.snapshot.params['preguntaId'];
    this._questionsService.getQuestionId(this.preguntaId).subscribe(
      (data) => {
        this.preguntas = data;
      },
      (error) =>{
        console.log(error);
        
      }
    )
  }

  updateQuestion(){
    this._questionsService.updateQuestion(this.preguntas).subscribe(
      (data) => {
        Swal.fire('Actulizado', 'Pregunta actulizado con exito', 'success');
        this._router.navigate(['/admin/questions-examen/'+this.preguntas.examen.examenId+'/'+this.preguntas.examen.titulo])
      },
      (error) =>{
        this._snackBar.open('Error!', 'Pregunta no modificado');
      }
    )
  }

}
