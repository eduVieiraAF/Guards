import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { canactivateGuard } from './shared/guards/canactivate.guard';
import { canDeactivateGuard } from './shared/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [canactivateGuard],
    canDeactivate: [canDeactivateGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
