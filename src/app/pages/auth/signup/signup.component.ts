import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  
  usuario!: Usuario;
  public user = {
    nombre : '',
    apellido : '',
    username : '',
    password : '',
    email : '',
    telefono : '',
  }

  constructor(
    private usuarioServices : UsuarioService, 
    private _snackBar: MatSnackBar,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.user.username == '' || this.user.username == null) {
      this._snackBar.open('Campo de username requerido!!','Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      //if (this.form.invalid) {
        //return Object.values(this.form.controls).forEach((controls) => {
          //controls.markAllAsTouched();
        //});
      //}
      return;
    }

    this.usuarioServices.registrarUsuario(this.user).subscribe(
      (resp) => {
        console.log(resp);
        Swal.fire({
          title: "Usuario Guardado",
          text: `Ingrese sesion con su usuario creado`,
          icon: "success"
        });
        this.router.navigate(['login'])
      },
      (error) => {
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
