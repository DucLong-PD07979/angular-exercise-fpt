import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  Router,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.services';

const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLogin = authService.isAuthenticated();
  if (!isLogin) {
    router.navigate(['/login']);
  }
  return isLogin;
};

export default AuthGuard;
