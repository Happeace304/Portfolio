import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContainerComponent } from './main-container/main-container.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MainContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
