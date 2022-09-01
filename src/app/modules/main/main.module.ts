import { NgModule } from '@angular/core';
import { GridLayoutModule } from '@shared/components/grid-layout/grid-layout.module';

import { MainContainerComponent } from './main-container/main-container.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainContainerComponent],
  imports: [MainRoutingModule, GridLayoutModule]
})
export class MainModule {}
