import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExamenesService } from 'src/app/services/examenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examen',
  templateUrl: './view-examen.component.html',
  styleUrls: ['./view-examen.component.css']
})
export class ViewExamenComponent implements OnInit{

  examen = {
    examenId : 0,
    descripcion: '',
    numeroPagina: '',
    numeroPreguntas: '',
    state: '',
    titulo: '',
    categoriaId: ''
  }

  examenes:any = [];


  constructor(
    private _examenService: ExamenesService,
    private _snack: MatSnackBar
  ){}


  ngOnInit(): void {
    this._examenService.finAllExamenes().subscribe(
      (data: any) => {
        this.examenes = data
        console.log(data);
        
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error', 'Error al cargar los examenes', 'error')
      }
    )
  }

  deleteExamen(examenId: number){
    Swal.fire({
      title: "Confirmar?",
      text: `Esta seguro de eliminar el examen`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this._examenService.deleteExamen(examenId).subscribe(
          (data) =>{
            this.examenes = this.examenes.filter((examen:any) => examen.examenId != examenId);
            Swal.fire('Eliminado!', `Examen eliminado.`, 'success');
          },
          (error)=>{
            console.log(error);
            this._snack.open('Error!','Error al eliminar examen', {
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
