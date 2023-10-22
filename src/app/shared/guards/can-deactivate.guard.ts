import { CanDeactivateFn } from '@angular/router';
import { AccountComponent } from '../account/account.component';

export const canDeactivateGuard: CanDeactivateFn<AccountComponent> = (
  component: AccountComponent,
  currentRoute,
  currentState,
  nextState
) => {
  return component.exit();};
