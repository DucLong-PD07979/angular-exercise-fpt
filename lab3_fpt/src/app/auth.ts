import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  Router,
} from '@angular/router';

const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const isLogin = false;
  if (!isLogin) {
    new Router().navigate(['/login']);
  }
  return isLogin;
};

export default canActivateTeam;
