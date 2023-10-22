import { CanDeactivateFn } from '@angular/router';
import { AccountComponent } from '../pages/account/account.component';

export const canDeactivateGuard: CanDeactivateFn<AccountComponent> = (
  component: AccountComponent,
  currentRoute,
  currentState,
  nextState
) => {
  console.log("currentRoute",currentRoute)
  console.log("currentState", currentState)
  console.log("nextState" ,nextState)

  return component.exit();};
