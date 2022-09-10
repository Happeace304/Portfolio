import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContainerComponent } from './main-container/main-container.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MainContainerComponent
  },
  {
    path: 'details',
    component: PersonalDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
