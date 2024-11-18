import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  categorias:any[]=[];

  constructor(
    private _categoryService: CategoriaService,
    private _snackBar: MatSnackBar,
  ){}

  ngOnInit(): void {
    this._categoryService.findAllCategorias().subscribe(
      (data:any)=>{
        this.categorias = data
        console.log(data);
      },
      (error)=>{
        console.log(error);
        this._snackBar.open('Ha ocurido una error en el sistema!! ','Aceptar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        
      }
    )
  }

}
