import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@shared/components/components.module';

import { MainContainerComponent } from './main-container/main-container.component';
import { MainRoutingModule } from './main-routing.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@NgModule({
  declarations: [MainContainerComponent, PersonalDetailsComponent],
  imports: [MainRoutingModule, CommonModule, ComponentsModule, ReactiveFormsModule]
})
export class MainModule {}
