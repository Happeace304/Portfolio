import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginContainerComponent],
  imports: [CommonModule, LoginRoutingModule]
})
export class LoginModule {}
