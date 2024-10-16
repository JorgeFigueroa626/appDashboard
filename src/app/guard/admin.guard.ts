import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn() && loginService.getUserRole() == 'ADMIN') {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
