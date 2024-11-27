import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authservice = inject (AuthService);
  if(authservice.authenticat()){
    return true;
  }else{
    router.navigate(['/aadmin']);
    return false;
  }
};
