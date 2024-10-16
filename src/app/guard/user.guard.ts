import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const userGuard: CanActivateFn = (route, state) => {
  
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn() && loginService.getUserRole() == 'NORMAL') {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
