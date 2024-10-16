import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  categorys:any;

  constructor(
    private _categoryService: CategoriaService,
    private _snackBar: MatSnackBar
  ){}


  ngOnInit(): void {
    this._categoryService.findAllCategorias().subscribe(
      (data) => {
        this.categorys = data;
      },
      (error) => {
        this._snackBar.open("Error al cargar categorias", "", {
          duration: 3000
        })
        console.log(error);
        
      }
    )
  }



}
