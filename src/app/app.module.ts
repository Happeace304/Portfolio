import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from "./modules/core/core.module";
import { RoutingAppModule } from "./routing-app.module";

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, RoutingAppModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
