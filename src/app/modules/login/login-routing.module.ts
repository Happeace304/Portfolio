import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginContainerComponent } from './login-container/login-container.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LoginContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
