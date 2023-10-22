import { CanActivateFn } from '@angular/router';

export const canactivateGuard: CanActivateFn = (route, state) => {

  if (route.queryParams['account'] === 'admin' && route.queryParams["password"] === '123456') {
    console.log(state)
    console.log(route)

    return true
  } else {
    alert("Wrong account or password");
    console.log(state)
    console.log(route)

    return false;
  }
};
