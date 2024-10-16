import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private _login:LoginService, private _router:Router){}

  public logout(){
    this._login.logout();
    window.location.reload();
    this._router.navigateByUrl('')
  }
}
