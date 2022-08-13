import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, BodyComponent],
  imports: [CommonModule],
  exports: [MainComponent]
})
export class ShellModule {}
