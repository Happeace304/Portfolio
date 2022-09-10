import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { TextInputComponent } from './form/text-input/text-input.component';
import { ColumnComponent } from './grid-layout/column/column.component';
import { GridContainerComponent } from './grid-layout/grid-container/grid-container.component';
import { RowComponent } from './grid-layout/row/row.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [RowComponent, ColumnComponent, GridContainerComponent, CardComponent, TextInputComponent],
  exports: [RowComponent, ColumnComponent, GridContainerComponent, CardComponent, TextInputComponent]
})
export class ComponentsModule {}
