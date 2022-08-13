import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/shell/main/main.component';
import { ShellModule } from './modules/shell/shell.module';

const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [ShellModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
