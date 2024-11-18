import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  categoria = {
    titulo: '',
    descripcion: ''
  }

  constructor(
    private _categoriaService: CategoriaService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ){}

  ngOnInit(): void {
  }

  formSubmit(){
    if (this.categoria.titulo == '' || this.categoria.descripcion == '') {
      this._snackBar.open('Datos obligatorios', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'snackbar-info'
      })
      return;
    }

    this._categoriaService.saveCategoria(this.categoria).subscribe(
      (data: any) =>{
        this.categoria.titulo = '',
        this.categoria.descripcion = '',
        Swal.fire('Categoria Agregada', 'Categoria guarda con exito', 'success'),
        this._router.navigateByUrl('admin/categorias');
      },
      (error) => {
        console.log(error);
        this._snackBar.open('Error al agregar categoria', 'Error!', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          panelClass: 'snackbar-info'
        })
        
      }
    )
  }

}
