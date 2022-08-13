import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderItemListComponent } from './header/header-item-list/header-item-list.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  declarations: [MainComponent, HeaderComponent, HeaderItemListComponent],
  imports: [CommonModule, ShellRoutingModule],
  exports: [MainComponent]
})
export class ShellModule {}
