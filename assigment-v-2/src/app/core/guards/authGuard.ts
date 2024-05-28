import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  Router,
} from '@angular/router';

const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const isLogin = true;
  if (!isLogin) {
    new Router().navigate(['/login']);
  }
  return isLogin;
};

export default AuthGuard;
