import { NgModule } from '@angular/core';

import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeContainerComponent],
  imports: [HomeRoutingModule]
})
export class HomeModule {}
