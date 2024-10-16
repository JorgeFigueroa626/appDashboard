import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenesService } from 'src/app/services/examenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit{

  categorias:any=[]

  examenData = {
    titulo: '',
    descripcion: '',
    puntosMaximo: '',
    numeroPreguntas: '',
    state: false,
    categoria: {
        categoriaId: 0
    }
  }

  // Assume you have a form group and a model
  form!: FormGroup;
  model: any = {};

  constructor(
    private _examenService: ExamenesService,
    private _categoriaService: CategoriaService,
    private _snack: MatSnackBar,
    private _router: Router
  ){}

  ngOnInit(): void {
    this._categoriaService.findAllCategorias().subscribe(
      (data:any) =>{
        this.categorias = data
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error', 'Error al cargar las categorias', 'error')
      }
    )
  }

  saveExamen(){
    console.log(this.examenData);
    if (this.examenData.titulo.trim() == '' || this.examenData.titulo == null) {
      this._snack.open('Error', 'Titulo requerido', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'snackbar-info'
      });
      return;
    }
    this._examenService.saveExamen(this.examenData).subscribe(
      (data: any)=>{
        this.examenData = data;
        Swal.fire('Registrado', 'Examen registrado con exito', 'success'),
        this._router.navigate(['/admin/examenes']);
      },
      (error) =>{
        console.log(error);
        this._snack.open('Error', 'Error al registrar examen', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: 'snackbar-info'
        });
      }
    )
  }


}
