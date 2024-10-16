import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css'],
})
export class AddQuestionsComponent implements OnInit {

  constructor(
    private _questionsExamen: QuestionsService,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  examenId: any;
  titulo: any;
  preguntas: any = {
    examen: {},
    contenido: '',
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
    respuesta: '',
  };

  ngOnInit(): void {
    this.examenId = this._route.snapshot.params['examenId'];
    this.titulo = this._route.snapshot.params['titulo'];
    this.preguntas.examen['examenId'] = this.examenId;
  }

  saveQuestions() {
    if (this.preguntas.contenido.trim() == '') {
      this._snackBar.open('Error!', 'Campo de contenido requerido', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }
    this._questionsExamen.createQuestionsByExamenId(this.preguntas).subscribe(
      (data) => {
        //this.preguntas = data;
        Swal.fire('Guardado', 'Preguntas guardadas con exito', 'success');
        this._router.navigate(['/admin/examenes']);
      },
      (error) => {
        console.log(error);
        this._snackBar.open('Error!', 'Preguntas no guadadas', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    );
  }
}
