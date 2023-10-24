import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {

  console.log(childRoute);
  console.log(state);

  if (childRoute.queryParams['account'] === 'admin' && childRoute.queryParams["password"] === '123456') {


    return true
  } else {
    alert("Wrong account or password");


    return false;
  }
};
