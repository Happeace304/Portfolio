import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BodyComponent } from './body/body.component';
import { HeaderItemListComponent } from './header/header-item-list/header-item-list.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, BodyComponent, HeaderItemListComponent],
  imports: [CommonModule],
  exports: [MainComponent]
})
export class ShellModule {}
