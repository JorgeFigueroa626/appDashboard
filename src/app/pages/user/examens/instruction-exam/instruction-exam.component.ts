import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenesService } from 'src/app/services/examenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction-exam',
  templateUrl: './instruction-exam.component.html',
  styleUrls: ['./instruction-exam.component.css']
})
export class InstructionExamComponent  implements OnInit{


  examId:any;
  exam:any=[];

  constructor(
    private _route:ActivatedRoute,
    private _examenService:ExamenesService,
    private _router:Router
  ){}

  ngOnInit(): void {
    this.examId = this._route.snapshot.params['examId'];
    this._examenService.getByExamenId(this.examId).subscribe(
      (data) => {
        this.exam = data;
        //console.log(data);
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  startExam(){
    Swal.fire({
      title: 'Comenzar el examen?',
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText:'Empezar',
      icon: 'info'
    }).then((result:any) => {
        if (result.isConfirmed) {
          this._router.navigate(['/start/'+this.examId]);
        }
    })
  }

}
