import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ExamenesService } from 'src/app/services/examenes.service';

@Component({
  selector: 'app-view-examens',
  templateUrl: './view-examens.component.html',
  styleUrls: ['./view-examens.component.css'],
})
export class ViewExamensComponent implements OnInit {
  categoryId: any;
  examens: any;

  constructor(
    private _examenService: ExamenesService,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar

  ) {}

  ngOnInit(): void {
    this._route.params.subscribe( 
      (params) => {
        this.categoryId = params['categoryId'];

        if (this.categoryId == 0) {
          console.log('Cargando examenes');
          this._examenService.getExamenActivo().subscribe(
            (data) => {
              this.examens = data;
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          console.log('Cargar examen especifico');
          this._examenService.getAllExamenActivoByCategoriaId(this.categoryId).subscribe(
            (data) =>{
              this.examens = data
            },
            (error) => {
              this._snackBar.open('Error al cargar los examenes', 'Error!', {
                duration: 3000
              })
              console.log(error);
            
            }
          )
        }
      }
    )
    
  }
}
