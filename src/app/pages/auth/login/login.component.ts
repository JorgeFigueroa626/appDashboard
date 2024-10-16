import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private _snackBar: MatSnackBar,
    private _loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (this.loginData.username.trim() == '' ||  this.loginData.username.trim() == null) {
      this._snackBar.open('El nombre del usuario es obligation', 'Aceptar', {
        duration: 3000,
      });
      return;
    }

    if (  this.loginData.password.trim() == '' || this.loginData.password.trim() == null ) {
      this._snackBar.open('La contraseña es obligatorio', 'Aceptar', {
        duration: 3000,
      });
      return;
    }

    this._loginService.loginToke(this.loginData).subscribe(
      (data: any)=>{
        console.log(data);
        this._loginService.loginUser(data.token);
        this._loginService.getCurrentUser().subscribe(
          (user: any) =>{
            this._loginService.setUser(user);
            console.log(user);

            if (this._loginService.getUserRole() == 'ADMIN') {
              //DASHBOARD
              this.router.navigate(['admin'])
              this._loginService.loginStatusSubjec.next(true);

            } else  if (this._loginService.getUserRole() == 'NORMAL') {
              //USER-DASHBOARD
              this.router.navigate(['user-dashboard/0'])
              this._loginService.loginStatusSubjec.next(true);

            }else{
              this._loginService.logout();
            }
            
          }
        )
      },
      (error) =>{ console.log(error);
        this._snackBar.open('Usuario invalido, vuelva a interntar', 'Aceptar', {
          duration: 3000
        })
      }
    )
  }
}
