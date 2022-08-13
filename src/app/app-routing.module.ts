import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/shell/shell.module').then(({ ShellModule }) => ShellModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(({ LoginModule }) => LoginModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
