import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenesService } from 'src/app/services/examenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-examen',
  templateUrl: './update-examen.component.html',
  styleUrls: ['./update-examen.component.css'],
})
export class UpdateExamenComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _examenService: ExamenesService,
    private _categoriaService: CategoriaService,
    private _router:Router
  ) {}

  examenId = 0;
  examenData:any;
  categorias:any;

  ngOnInit(): void {
    this.examenId = this._route.snapshot.params['examenId'];
    this._examenService.getByExamenId(this.examenId).subscribe(
      (data) => {
        this.examenData = data;
        console.log(this.examenData);
      },
      (error) => {
        console.log(error);
      }
    )

    this._categoriaService.findAllCategorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }


  updateExamen() {
    this._examenService.updateExamen(this.examenData).subscribe(
      (data) =>{
        Swal.fire('Actualizado!', 'Examen actualizado', 'success').then(
          (resul) =>{
            this._router.navigate(['/admin/examenes'])
          }
        )
      },
      (error) =>{
        Swal.fire('Error!', 'Error al actualizar examen', 'error')
        console.log(error);
      }
    )
  }
}
