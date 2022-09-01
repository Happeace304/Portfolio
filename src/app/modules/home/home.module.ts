import { NgModule } from '@angular/core';
import { GridLayoutModule } from '@shared/components/grid-layout/grid-layout.module';

import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeContainerComponent],
  imports: [HomeRoutingModule, GridLayoutModule]
})
export class HomeModule {}
