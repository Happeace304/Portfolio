import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderItemListComponent } from './header/header-item-list/header-item-list.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell-container/shell.component';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, HeaderItemListComponent],
  imports: [CommonModule, ShellRoutingModule],
  exports: [ShellComponent]
})
export class ShellModule {}
